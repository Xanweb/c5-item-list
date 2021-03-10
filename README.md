# Concrete5 Item List

Manage your list of items easily without need to write a bunch of code

## Installation

Include library to your composer.json
```bash
composer require xanweb/c5-item-list
```

Add the service provider to `application/config/app.php`
```php
return [
    'providers' => [
        'xw_item_list' => '\Xanweb\ItemList\ServiceProvider'
    ],
];
```
or load it from you package on_start
```php
public function on_start()
{
    $this->app->make(\Concrete\Core\Foundation\Service\ProviderList::class)->registerProvider(\Xanweb\ItemList\ServiceProvider::class);
}
```

## Usage
1. Load optional assets depending on your needs:
    * Editor Assets (`$this->app['editor']->requireEditorAssets();`) if you need to use RichText Editor
    * Colorpicker Asset Group (`core/colorpicker`) in case of using Color Picker in the list 

2. Load required Item List Asset Group (`xw/item-list`)
3. Setup Item List HTML structure
```HTML
<div id="myUniqueID">
    <!-- Place the `Add Item` Button -->
    <button class="btn btn-success xw-item-list__add-item"><?= t('Add Item') ?></button>

    <!-- Place your items wrapper -->
    <div class="xw-item-list__items"></div>
    
    <!-- You can add floating button if you are using it within block edit form -->
    <div class="floating-block-actions">
        <button class="btn btn-success xw-item-list__add-item"><?= t('Add Item') ?></button>
    </div>
</div>
```
4. Now we need to prepare our [Underscore.js](https://underscorejs.org/#template) item template

```HTML
<script type="text/template" id="myItemTemplateID">
    
    <div class="xw-item-list__item">
        <!-- Sort Handler Icon (Optional) -->
        <i class="btn drag-handle fas fa-arrows-alt"></i>

        <!-- An example of a collapsible item structure -->
        <div class="panel-heading">
            <div class="row">
                <div class="col-xs-12 text-right">
                    <div class="btn-group-sm">
                        <a href="javascript:void(0);" class="btn btn-outline-secondary xw-item-list__edit-item xw-item-list__item-expander" data-target=".panel-body">
                            <?= t('Edit Item') ?>
                        </a>
                        <a href="javascript:void(0);" class="btn btn-danger xw-item-list__remove-item"><?= t('Remove') ?></a>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="panel-body form-horizontal" style="display: none;">
            <div class="clearfix">
                <!-- Example of simple text field -->
                <div class="form-group">
                    <label class="control-label"><?= t('Title') ?></label>
                    <input type="text" class="form-control" name="<?= $view->field('title') ?>[]" value="<%-item.title%>" maxlength="255">
                </div>

                <!-- Example of RichText  editor field (The class `editor-content` is required to use RichText Editor) -->
                <div class="form-group">
                    <label class="control-label"><?= t('Description') ?></label>
                    <textarea class="editor-content" name="<?= $view->field('description') ?>[]" id="<%=_.uniqueId('desc')%>"><%=item.description%></textarea>
                </div>

                <!-- Example of File Selector field -->
                <div class="form-group">
                    <label class="control-label"><?= t('File') ?></label>                
                    <div class="xw-item-list__img-selector" data-value="<%=item.fID%>"></div>
                    <input type="hidden" name="<?php echo $view->field('fID'); ?>[]" class="image-fID" value="<%=item.fID%>"/>
                </div>
                
                <!-- Example of Color Picker field -->
                <div class="form-group">
                  <label class="control-label"><?= t('Title Color') ?></label>
                  <input class="ccm-widget-colorpicker" type="text" name="<?= $view->field('titleColor') ?>[]" value="<%-item.titleColor%>" id="ccm-colorpicker-<?= $view->field('titleColor') ?>" />
                </div>

                <!-- Example of Link Type auto switcher -->
                <div style="min-height: 130px;">
                    <div class="form-group">
                        <label class="control-label"><?= t('Link Type') ?></label>
                        <!-- data-choice attribute is required to mark related choice group -->
                        <select name="<?= $view->field('linkType') ?>[]" class="form-control" data-choice="link-type">
                            <option value="0"<% if (item.linkType == 0) { print(' selected'); } %>><?= t('No link') ?></option>
                            <option value="1"<% if (item.linkType == 1) { print(' selected'); } %>><?= t('Another Page') ?></option>
                            <option value="2"<% if (item.linkType == 2) { print(' selected'); } %>><?= t('External URL') ?></option>
                        </select>
                    </div>

                    <div style="display: none;" class="form-group form-group-sm" data-choice-group="link-type" data-choice-value="1">
                        <label class="control-label"><?= t('Choose Page') ?></label>
                        <!-- Example of Page Selector Field -->
                        <div data-field="page-selector" data-name="<?= $view->field('internalLinkCID') ?>[]" data-value="<%=item.internalLinkCID%>"></div>
                    </div>

                    <div style="display: none;" class="form-group form-group-sm" data-choice-group="link-type" data-choice-value="2">
                        <label class="control-label"><?= t('URL') ?></label>
                        <input type="text" class="form-control" name="<?= $view->field('externalLink') ?>[]" value="<%-item.externalLink%>">
                    </div>
                </div>

                <!-- If you want to preserve sort order put a hidden field with class `xw-item-entry-sort` -->
                <input class="xw-item-entry-sort" type="hidden" name="<?= $view->field('sortOrder') ?>[]" value="<%=item.sortOrder%>"/>
            </div>
        </div>
    </div>
</script>
```

5. Finally, we need to initialize the Item List script
```javascript
<script>
    $(function(){
        $('#myUniqueID').xwItemList({
            templateId: "myItemTemplateID",
            items: <?= json_encode($rows) ?>,
        });
    });
</script>
```
## License
The Concrete5 Item List is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
