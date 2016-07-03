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
      current_symbol = current_symbol;
      console.log(current_symbol);
      
    }
    else if(condition == 'relised')
    {
      current_symbol = current_symbol;
      console.log(current_symbol);
    }
    
    
      
  }
