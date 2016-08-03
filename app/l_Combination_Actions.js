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
    
    var divider = new Divider();
    
    var unique_index = new Unique_index.getInstance();
    
  /**
    * @function keyword
    * @desc start process of combination manipulations.
    * @mamberof Combination_Actions
    * @instance
    */
    this.keyword = function(argument)
    {
      var cursor = director.getCursorEntity("active");
      
      var parent = director.getParentWord();
      
      parent.classList.add('keyword');
    }
    
  /**
    * @function lineComment
    * @desc start process of combination manipulations.
    * @mamberof Combination_Actions
    * @instance
    */
    this.lineComment = function(argument, parametrs)
    {
      if(!argument)
      {
        argument = '';
      }

      var cursor = director.getCursorEntity("active");
      
      var left_element_of_combination = director.getLeftUniqueElement(cursor, parametrs);
      
      var previous_for_combination = director.getBeforeEntity(left_element_of_combination);
      
      var line = cursor.parentNode;
      
      director.makeAllUniqueWith(cursor, 'line_Comment'+argument, parametrs);
      
      var content = divider.getElementsAfter(cursor);
      
      if(content)
      {
        content = divider.concat(content);

        director.deleteElementsAfter(cursor);

        var coments_content = document.createTextNode(content);
      }
      else
      {
        coments_content = '';
      }
      var combination = director.cutElementsAfter(previous_for_combination);
      
      var comment = director.create('lineComment', coments_content, 'active');
      
      comment.innerHTML = combination + divider.divide(comment.innerHTML);
      
      //comment.appendChild(coments_content);
      
      line.appendChild(comment);
      
    }
    
  /**
    * @function lineComment
    * @desc start process of combination manipulations.
    * @mamberof Combination_Actions
    * @instance
    */    
    this.removeLineComment = function()
    {
      
    }
    
  /**
    * @function clear
    * @desc start process of combination manipulations.
    * @mamberof Combination_Actions
    * @instance
    */
    this.clear = function()
    {
      var cursor = director.getCursorEntity("active");
        
      var parent = director.getParentWord();
      
      if(director.isWord(parent))
      {
        director.makeItWord(parent,['parent']);
      }
    }
    
  }
  return Combination_Actions;
})()