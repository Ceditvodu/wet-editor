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
        
    this.keyword = function(argument)
    {
      var cursor = director.getCursorEntity("active");
      
      var parent = director.getParentWord();
      
      parent.classList.add('keyword');
    }
    
    this.lineComment = function(argument)
    {
      if(!argument)
      {
        argument = '';
      }

      var cursor = director.getCursorEntity("active");
      
      var utmost_element = director.getLastNonSpaceSignifier(cursor, 'left');
      
      var previous_for_utmost = director.getBeforeEntity(utmost_element);
      
      var line = cursor.parentNode;
      
      director.makeAllUniqueWith(cursor, 'lineComment'+argument);
      
      var content = divider.getElementsAfter(cursor);
      
      content = divider.concat(content);
      
      
      director.deleteElementsAfter(cursor);
      
      var combination = director.cutElementsAfter(previous_for_utmost);
      
      console.log(combination);
      
      var coments_content = document.createTextNode(content);
      
      var comment = director.create('lineComment', coments_content, 'active');
      
      comment.innerHTML = combination + divider.divide(comment.innerHTML);
      
      //comment.appendChild(coments_content);
      
      line.appendChild(comment);
      
      
    }

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