	///////////////////////////////////
	/*          CUSTOM CLASS         */
	///////////////////////////////////
/**
  * @name Combination_Actions
  * @version 1.0.0
  * @author Ivan Kaduk
  * @copyright Ivan Kaduk 2016.
  * @license cc-by-nc-sa 4.0
  * @class
  * @classdesc This class need for manipulating objects on code editors work space.
  * @param {object} concrete_entity - object with work space.
  * @param {String} prefix - prefix for elements classes.
  * @param {String} active - cursors active class name.
  * @namespace Director
  * @constructs Director
  * @example director.getCursorEntity('active');
  */
var Combination_Actions = (function()
{
  function Combination_Actions(concrete_entity, prefix, active)
  {
    var director = new Director(concrete_entity, prefix, active);
        
    this.keyword = function(argument)
    {
      var cursor = director.getCursorEntity("active");
      
      var parent = director.getParentWord();
      
      parent.classList.add('keyword');
    }
    
    this.lineComment = function(argument)
    {
      var cursor = director.getCursorEntity("active");
      
      
    }

    this.clear = function()
    {
      var cursor = director.getCursorEntity("active");
      
      var parent = director.getParentWord();
      
      director.makeItWord(parent,['parent']);
    }
    
  }
  return Combination_Actions;
})()