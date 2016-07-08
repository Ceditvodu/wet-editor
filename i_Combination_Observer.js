  ///////////////////////////////////
	/*          OBSERVERS            */
	///////////////////////////////////
/**
  * @name Combination_Observer
  * @author Ivan Kaduk
  * @copyright Ivan Kaduk 2016.
  * @license cc-by-nc-sa 4.0
  * @class
  * @classdesc it is reaction under some code combinations.
  * @namespace Key_Observer
  * @constructs
  * @param {Editor} data - getting main object
  * @param {Key_Scope} scope - key map singelton 
  * @param {int} index - index of current active editor element
  * @param {event} event - object that contain event data
  * @param {String} condition - condition of key: pressed or released 
  */

  var Combination_Observer = function(data, scope, symbol, index, event, condition)
  {
    // initialization of new character class generator
    var class_generator = new Char_Class_Generator('wet-');
  
    // initialization of module that make action according pressed keys
    var hotkey = new Module.getInstance();
  
    // current entity of editor
    var concrete_entity = data.container[index];
    
    var concrete_line = data.line[index][data.current_line[index]]

    // initialization of words exloser
    var divider = new Divider();
    
    var director = new Director(concrete_entity, 'wet-');
        
    var current_symbol = symbol.getCurrentSymbol();
    
    var key_holding_count = 0;
    
    // combination map that in future will be loading from file 
    // according languadge
    var combinations_map = {
      'lineComment':{
        'type':{
          'start':'//'
        }
      },
      'comment':{
        'type':{
          'start':'/*',
          'end':'*/'
        }
      },
      'string':{
        'type':{
          'start':"'",
          'end':"'"
        },
        'type':{
          'start':'"',
          'end':'"'
        }
      }
    }
          
    // if key is pressed or relissed add event to singleton
    if((condition == 'pressed'))
    {
      if(current_symbol == '')
      {
        
      }
      else
      {
        key_holding_count++;
        
        this.init();
      }
    }
    else if(condition == 'relised')
    {
        key_holding_count--;

        if(key_holding_count < 0)
        {
          current_symbol = symbol.getCurrentSymbol();
          
          this.init();
          
          key_holding_count = 0;
        }
    }

  /**
    * @function init
    * @desc start process of combination manipulations.
    * @mamberof Director
    * @instance
    */
    this.init = function()
    {
      console.log(combinations_map.string);
    }

  }
