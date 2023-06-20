export default {
  fm: {
    components: {
      fields: {
        input: 'Input',
        textarea: 'Textarea',
        number: 'Number',
        radio: 'Radio',
        checkbox: 'Checkbox',
        time: 'Time',
        date: 'Date',
        rate: 'Rate',
        color: 'Color',
        select: 'Select',
        switch: 'Switch',
        slider: 'Slider',
        text: 'Text',
        blank: 'Custom',
        fileupload: 'File',
        imgupload: 'Image',
        editor: 'Editor',
        cascader: 'Cascader',
        table: 'Sub-Form',
        grid: 'Grid',
        tabs: 'Tabs',
        divider: 'Divider',
        html: 'HTML',
        component: 'Component',
        report: 'Table',
        button: 'Button',
        link: 'Link',
        inline: 'Inline',
        steps: 'Steps',
        transfer: 'Transfer',
        treeselect: 'TreeSelect',
        alert: 'Alert',
        user: 'User',
        role: 'Role',
        office: 'Office',
        dict: 'dict',
        area: 'Area',
      },
      basic: {
        title: 'Basic Field',
      },
      advance: {
        title: 'Advance Field',
      },
      layout: {
        title: 'Layout',
      },
      custom: {
        title: 'Custom Field',
      },
    },
    description: {
      containerEmpty:
        'You can drag and drop or click the item from the left  to add widgets',
      configEmpty: 'Please add a field',
      tableEmpty: 'Drag the field here',
      uploadJsonInfo:
        'There is the format of JSON below，you can overwrite it with you own JSON code',
    },
    message: {
      copySuccess: 'Copy Successed',
      validError: 'Form data validation failed',
      noPut: "Don't support adding this field",
      errorTip: 'Custom error tips',
      notSupport: 'Not supported by current browser',
    },
    actions: {
      import: 'Import JSON',
      clear: 'Clear',
      preview: 'Preview',
      json: 'Generate JSON',
      code: 'Generate code',
      getData: 'Get data',
      reset: 'Reset',
      copyData: 'Copy',
      cancel: 'Cancel',
      confirm: 'Confirm',
      addOption: 'Add option',
      addColumn: 'Add column',
      addTab: 'Add tab',
      upload: 'Upload',
      add: 'Add',
      undo: 'Undo',
      redo: 'Redo',
      enabledEdit: 'Enabled edit',
      disabledEdit: 'Disabled edit',
      clearSelect: 'Reset selection',
      close: 'Close',
      export: 'Export',
      print: 'Print',
      printReadMode: 'Print read mode',
      editMode: 'edit mode',
    },
    config: {
      form: {
        title: 'Form Attribute',
        labelPosition: {
          title: 'Label Position',
          left: 'Left',
          right: 'Right',
          top: 'Top',
        },
        labelWidth: 'Label Width',
        size: 'Size',
        customClass: 'Custom Class',
        beforeSave: 'execute before save',
        afterSave: 'execute after save',
        width: 'Form Width',
        styleSheets: 'Style Sheets',
      },
      widget: {
        title: 'Component Attribute',
        model: 'ID',
        name: 'Name',
        width: 'Width',
        height: 'Height',
        size: 'Size',
        labelWidth: 'Label Width',
        custom: 'Custom',
        placeholder: 'Placeholder',
        layout: 'Layout',
        block: 'Block',
        inline: 'Inline',
        contentPosition: 'Content Position',
        left: 'Left',
        right: 'Right',
        center: 'Center',
        showInput: 'Display Input Box',
        min: 'Minimum',
        max: 'Maximum',
        step: 'Step',
        precision: 'Precision',
        controls: 'Enable the control buttons',
        controlsPosition: 'Position of the control buttons',
        multiple: 'Multiple',
        filterable: 'Searchable',
        allowHalf: 'Allow Half',
        showAlpha: 'Support transparency options',
        showLabel: 'Show lable',
        option: 'Option',
        staticData: 'Static Data',
        remoteData: 'Dynamic Data',
        dictData: 'Dict Data',
        dictType: 'Dict Type',
        remoteFunc: 'Function',
        remoteAssigned: 'Assigned Variable',
        value: 'Value',
        label: 'Label',
        childrenOption: 'Children',
        defaultValue: 'Default Value',
        showType: 'Display type',
        isRange: 'Range Time',
        isTimestamp: 'Get time stamp',
        startPlaceholder: 'Placeholder of start time',
        endPlaceholder: 'Placeholder of end time',
        format: 'Format',
        limit: 'Maximum Upload Count',
        isQiniu: 'Upload with Qiniu Cloud',
        tokenFunc: 'Get QiNiu token',
        imageAction: 'Picture upload address',
        tip: 'Text Prompt',
        action: 'Request URL',
        headers: 'Request headers',
        defaultType: 'Data Type',
        string: 'String',
        object: 'Object',
        array: 'Array',
        number: 'Number',
        boolean: 'Boolean',
        integer: 'Integer',
        float: 'Float',
        url: 'URL',
        email: 'E-mail',
        hex: 'Hexadecimal',
        gutter: 'Grid Spacing',
        columnOption: 'Column Configuration',
        flex: 'Flex Layout',
        responsive: 'Responsive Layout',
        span: 'Grid spans',
        responsiveSpan: 'Responsive columns',
        offset: 'Offset',
        push: 'Push',
        pull: 'Pull',
        justify: 'Horizontal Arrangement',
        justifyStart: 'Start',
        justifyEnd: 'End',
        justifyCenter: 'Center',
        justifySpaceAround: 'Space Around',
        justifySpaceBetween: 'Space Between',
        align: 'Vertical Arrangement',
        alignTop: 'Top',
        alignMiddle: 'Middle',
        alignBottom: 'Bottom',
        type: 'Type',
        default: 'Default',
        card: 'Tabs',
        borderCard: 'Border-Card',
        tabPosition: 'Tab Position',
        top: 'Top',
        bottom: 'Bottom',
        tabOption: 'Label Configuration',
        tabName: 'Tab Name',
        customClass: 'Custom Class',
        attribute: 'Attribute Action',
        dataBind: 'Data Binding',
        hidden: 'Hidden',
        readonly: 'Read Only',
        disabled: 'Disabled',
        editable: 'Text box is editable',
        clearable: 'Display Clear Button',
        arrowControl: 'Use the arrow for time selection',
        isDelete: 'Deletable',
        isEdit: 'Editable',
        showPassword: 'Display Password',
        showScore: 'Show Score',
        validate: 'Validation',
        required: 'Required',
        patternPlaceholder: 'Fill in the regular expressions',
        newOption: 'New Option',
        tab: 'Tab',
        isOnlySelectLeaf: 'is only select leaf',
        dataUrl: 'data url',
        validatorRequired: ' required',
        validatorType: ' invaild format',
        validatorPattern: ' unmatched pattern',
        customTemplates: 'Custom templates',
        setting: 'Setting',
        hideLabel: 'Hide Label',
        borderWidth: 'Border Width',
        borderColor: 'Border Color',
        buttonName: 'Button Name',
        buttonSize: 'Button Size',
        buttonType: 'Button Type',
        buttonPlain: "Determine whether it's a plain button",
        buttonRound: "Determine whether it's a round button",
        buttonCircle: "Determine whether it's a circle button",
        linkType: 'Link Type',
        linkName: 'Link Name',
        underline: 'whether the component has underline',
        isBlank: 'Whether to open in a new window',
        withCredentials: 'Using credentials',
        customValidation: 'Custom validation rules',
        paging: 'Paging',
        pageSize: 'Page size',
        checkStrictly: 'Optional any node',
        extendPropsConfig: 'Extended property configuration',
        steps: 'Step options',
        space: 'Spacing fo each step',
        direction: 'Display direction',
        processStatus: 'Status of current step',
        finishStatus: 'Status of end step',
        alignCenter: 'Center title and description',
        simple: 'Simple theme',
        titles: 'Titles',
        otitle: 'Tile',
        description: 'Description',
        effect: 'Effect',
        closable: 'Closable',
        showIcon: 'Show icon',
        spaceSize: 'Space size',
        userMax: 'can select how many users',
      },
      list: {
        title: 'List',
        isShow: 'Showable',
        isSort: 'Sortable',
        isSearch: 'Searchable',
        attribute: 'column',
      },
    },
    upload: {
      preview: 'preview',
      edit: 'replace',
      delete: 'delete',
    },
    tooltip: {
      trash: 'trash',
      clone: 'clone',
      addrow: 'add row',
      addcolumn: 'add column',
      mergedown: 'merge down',
      mergeright: 'merge right',
      deleterow: 'delete current row',
      deletecolumn: 'delete current column',
      cellsetting: 'cell setting',
      insertcolumnleft: 'insert column left',
      insertcolumnright: 'insert column right',
      insertrowbefore: 'insert row before',
      insertrowafter: 'insert row after',
      splitcolumns: 'split into columns',
      splitrows: 'split into rows',
    },
    datasource: {
      name: 'Data Source',
      config: {
        title: 'Data source settings',
        add: 'Add data source',
        save: 'Save',
        cancel: 'Cancel',
        test: 'Request Test',
      },
      edit: {
        name: 'Name',
        url: 'Url',
        method: 'Method',
        headers: 'Headers',
        params: 'Params',
        auto: 'Whether the form is initialized to send the request',
        response: 'Data processing',
        annotation:
          'The response data res is returned directly by default, and the data can be processed below',
        add: 'Add',
        willRequest: 'Before sending the request:',
        responseSuccess: 'When requesting response data:',
        requestError: 'When an error occurs in the request:',
      },
      message: {
        repeat: 'Data source name cannot be repeated',
        settingError: 'Data source setting error',
        saveSuccess: 'Saved successfully',
        saveError: 'There is unsaved data, please save it first',
        confirmRemove: 'Are you sure you want to delete the data source',
      },
    },
    eventscript: {
      name: 'Action Panel',
      config: {
        title: 'Action Settings',
        add: 'Add action',
        save: 'Save',
        confirm: 'OK',
        cancel: 'Cancel',
        create: 'New action',
        code: 'Edit code',
      },
      message: {
        repeat: 'Function name cannot be repeated',
        saveSuccess: 'Save successfully',
        saveError: 'There are unsaved data, please save first',
        confirmRemove: 'Are you sure you want to delete this Function',
      },
    },
    importjson: {
      name: 'Template Library',
      noimage: 'No preview image ',
      loadjson: 'Load Template',
      nojson: 'No Template',
    },
  },
}