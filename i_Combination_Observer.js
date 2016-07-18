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
    var concrete_entity = data.container[index];
    
    var director = new Director(concrete_entity, 'wet-', 'active');
    
    var divider = new Divider();
    
    var class_generator = new Char_Class_Generator();
      
    var current_symbol = symbol.getCurrentSymbol();
    
    var key_holding_count = 0;
    
    var combination = Combination_Init.getInstance();
    // add some values to combination
    combination.setUp(concrete_entity, 'wet-', 'active');
          
    // if key is pressed or relissed add event to singleton
    if((condition == 'pressed'))
    {
      if(current_symbol == '')
      {
        
      }
      else
      {
        key_holding_count++;
        
        if(key_holding_count != 1)
        {
          this.doActionForCombination(); 
            
        }
  
      }
    }
    else if(condition == 'relised')
    {
      key_holding_count--;

      if((key_holding_count > 0)|(key_holding_count < 0))
      {
        current_symbol = symbol.getCurrentSymbol();
        
        this.doActionForCombination();
        
        key_holding_count++;
      }
      
    }
    
  /**
    * @function init
    * @desc start process of combination manipulations.
    * @mamberof Director
    * @instance
    */
    this.doActionForCombination = function()
    {
      var cursor = director.getCursorEntity('active');
      
      var cursor_class = class_generator.mainClass(cursor.innerHTML).generate();
      
      var previouse_element = director.getBeforeEntity(cursor);
      
      var next_element = director.getNextEntity(cursor);
      
      var parent = director.getParentWord();
      
      var parents_content = divider.concat(parent);
      

      
      if(cursor_class == 'signifier')
      {
        console.log(director.collectSignifier(cursor));
        
        
      }
      else if((cursor_class == 'numeral')|(cursor_class == 'character'))
      {
        combination.runCombination(parents_content);
      }
    }
  }
