	///////////////////////////////////
	/*          CUSTOM CLASS         */
	///////////////////////////////////
/**
  * @name Director
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
var Director = (function()
{
  function Director(concrete_entity, prefix, active)
  {
    this.concrete_entity = concrete_entity;
    this.prefix = prefix;
    this.active = active;
    this.class_generator = new Char_Class_Generator(this.prefix);
    this.divider = new Divider();
    this.unique_index = new Unique_index.getInstance();

//////////////////////
// Comparative section 
//////////////////////
    
  /**
    * @function isThereAnyActiveWords 
    * @desc inspect editor for an active words.
    * @return {bool} - if we have some active word.
    * @mamberof Director
    * @instance
    */
    this.isThereAnyActiveWords = function()
    {
      var word = this.concrete_entity.getElementsByClassName('parent')[0] || false;
      
      if(word)
      {
        return true;
      }
      else
      {
        return false;
      }
    }
    
  /**
    * @function isCursorFirstOnALine 
    * @desc checking if cursor placed on start of line.
    * @param {String} cursor_marker - marker of cursor.
    * @return {bool} - is first on a line or not.
    * @mamberof Director
    * @instance
    */
    // !!!!!!!!!!!
    // !!!!!!!!!!!
    // NOT VERY USEFULL
    // !!!!!!!!!!!
    // !!!!!!!!!!!
    this.isCursorFirstOnALine = function(cursor_marker)
    { 
      var active_char = this.getCursorEntity(cursor_marker);
      
      var previouse_char = active_char.previousSibling || false;
      
      if(!previouse_char)
      {
        if(active_char.className.split(" ").indexOf(this.prefix+ "line-start") >= 0)
        {
          return true;
        }
        else
        {
          return false;
          
        }
      }
      else
      {
        return false;
      }

    } 
    
  /**
    * @function isCursorBeforeWord 
    * @desc chacking, if cursor placed before word.
    * @param {object} cursor_entity - marker of active element.
    * @return {bool} - is before or not
    * @mamberof Director
    * @instance
    */
    this.isCursorBeforeWord = function(cursor_entity)
    { 
      
      var previouse_char = cursor_entity.previousSibling;
      
      var index = previouse_char.className.split(" ").indexOf(this.prefix + "word");
      
      if(index >= 0)
      {
        return true;
      }
      else
      {
        return false;
      }

    }
    
    
  /**
    * @function isStart 
    * @desc checking element, is it start one.
    * @param {object} element - html element for checking.
    * @return {bool} - is it on start or not
    * @mamberof Director
    * @instance
    */
    this.isStart = function(element)
    { 
      if(element)
      {
        if(element.className.split(" ")[0] == this.prefix + 'line-start')
        {
          return true;
        }
        else
        {
          return false;
        }
      }
      else
      {
        return false;
      }
      
    }

  /**
    * @function isSignifier 
    * @desc checking element is signifier.
    * @param {object} element - html element for checking.
    * @return {bool} - is it signifier or not.
    * @mamberof Director
    * @instance
    */
    this.isSignifier = function(element)
    { 
      if(element)
      {
        if(element.className.split(" ").indexOf(this.prefix + 'signifier') >= 0)
        {
          return true;
        }
        else
        {
          return false;
        }
      }
      else
      {
        return false;
      }
      
    }
    
  /**
    * @function isNumerial 
    * @desc checking element is numeral.
    * @param {object} element - html element for checking.
    * @return {bool} - is it numeral or not.
    * @mamberof Director
    * @instance
    */
    //    !!!!!!!!!
    //    !!!!!!!!!
    //    rename with correction
    //    !!!!!!!!!
    //    !!!!!!!!!
    this.isNumeral = function(element)
    { 
      if(element)
      {
        if(element.className.split(" ").indexOf(this.prefix + 'numeral') >= 0)
        {
          return true;
        }
        else
        {
          return false;
        }
      }
      else
      {
        return false;
      }
      
    }

  /**
    * @function isWord
    * @desc checking element is it word.
    * @param {object} element - html element for checking.
    * @return {bool} - is it word or a not.
    * @mamberof Director
    * @instance
    */
    this.isWord = function(element)
    { 
      if(element)
      {
        if(element.className.split(" ").indexOf(this.prefix + 'word') >= 0)
        {
          return true;
        }
        else
        {
          return false;
        }
      }
      else
      {
        return false;
      }
      
    }

  /**
    * @function isParentWord
    * @desc checking element is it word.
    * @param {object} element - html element for checking
    * @return {bool} - is it parent  word or a not.
    * @mamberof Director
    * @instance
    */
//    !!!!!!!!!
//    !!!!!!!!!
//    rename it as isParent and redo in that way in which it can chack not only words
//    !!!!!!!!!
//    !!!!!!!!!
      
    this.isParentWord = function(element)
    { 
      if(element)
      {
        if(element.className.split(" ").indexOf('parent') >= 0)
        {
          return true;
        }
        else
        {
          return false;
        }
      }
      else
      {
        return false;
      }
      
    }

  /**
    * @function isCharacter
    * @desc checking element is it character.
    * @param {object} element - html element for checking.
    * @return {bool} - is it character or a not.
    * @mamberof Director
    * @instance
    */
    this.isCharacter = function(element)
    { 
      var equivalent = this.prefix + 'character';
      
      if(element)
      {
        if(element.className.split(" ").indexOf(equivalent) >= 0)
        {
          return true;
        }
        else
        {
          return false;
        }
      }
      else
      {
        return false;
      }
      
    }
    
  /**
    * @function isLine
    * @desc checking element is it line.
    * @param {object} element - html element for checking.
    * @return {bool} - is it line or a not.
    * @mamberof Director
    * @instance
    */
    this.isLine = function(element)
    { 
      var equivalent = this.prefix + 'line';
      
      if(element)
      {
        if(element.className.split(" ").indexOf(equivalent) >= 0)
        {
          return true;
        }
        else
        {
          return false;
        }
      }
      else
      {
        return false;
      }
      
    }
    
  /**
    * @function isCursoreBeforeWord
    * @desc checking element is it before word.
    * @param {object} element - html element for checking.
    * @return {bool}
    * @mamberof Director
    * @instance
    */
    // !!!!!!!!!!!
    // !!!!!!!!!!!
    // Already exist
    // !!!!!!!!!!!
    // !!!!!!!!!!!
    this.isCursoreBeforeWord = function(element)
    { 
      var equivalent = this.prefix + 'word';
      
      if(element)
      {
        if(element.nextSibling.className.split(" ").indexOf(equivalent) >= 0)
        {
          return true;
        }
        else
        {
          return false;
        }
      }
      else
      {
        return false;
      }
      
    }
    
  /**
    * @function isLineEmpty
    * @desc checking line is it empty.
    * @param {object} line - html element for checking.
    * @return {bool} - is this line is empty or not.
    * @mamberof Director
    * @instance
    */
    this.isLineEmpty = function(line)
    { 
      var equivalent = this.prefix + 'line';
      
      if(line)
      {
        var children = line.childNodes;
        if(children.length == 1)
        {
          if(children[0].className == this.prefix + 'line-start')
          {
            return true;
          }
          else
          {
            return false;
          }
        }
        else
        {
          return false;
        }
      }
      else
      {
        return false;
      }
      
    }
    
  /**
    * @function isCursorAtTheEndOfWord
    * @desc checking is cursor at the end of word.
    * @param {object} word - html element for checking.
    * @return {bool} - is cursore on the ond of word or not.
    * @mamberof Director
    * @instance
    */
    this.isCursorAtTheEndOfWord = function(word)
    { 
      if(word)
      {
        var last_elements_index = word.childNodes.length - 1;
        
        var last_element = word.childNodes[last_elements_index];
        
        if(this.isCursor(last_element))
        {
          return true;
        }
        else
        {
          return false;
        }
      }
      else
      {
        return false;
      }
      
    }
    
  /**
    * @function isCursorAtTheStartOfWord
    * @desc checking is cursor at the start of word.
    * @param {object} word - html element for checking.
    * @return {bool} - is cursore on the start of word or not.
    * @mamberof Director
    * @instance
    */
    this.isCursorAtTheStartOfWord = function(word)
    { 
      if(word)
      {
        var first_elements_index = 0;
        
        var first_element = word.childNodes[first_elements_index];
        
        if(this.isCursor(first_element))
        {
          return true;
        }
        else
        {
          return false;
        }
      }
      else
      {
        return false;
      }
    }
    
  /**
    * @function isCursor
    * @desc checking is the element is cursor.
    * @param {object} element - html element for checking.
    * @return {bool} - is it cursor or not.
    * @mamberof Director
    * @instance
    */
    this.isCursor = function(element)
    {
      if(element)
      {        
        if(element.className.split(" ").indexOf('active') >= 0)
        {
          return true;
        }
        else
        {
          return false;
        }
      }
      else
      {
        return false;
      }
      
    }
    
    /**
    * @function isSpace
    * @desc checking if the element is space.
    * @param {object} element - html element for checking.
    * @return {bool} - is it space or not.
    * @mamberof Director
    * @instance
    */
    this.isSpace = function(element)
    {
      if(element)
      {        
        if(element.className.split(" ").indexOf(this.prefix+'space') >= 0)
        {
          return true;
        }
        else
        {
          return false;
        }
      }
      else
      {
        return false;
      }
      
    }
    

    
//////////////////////
// Comparative section 
//////////////////////
    
//////////////////
// Getting section 
//////////////////
    
  /**
    * @function getCursorEntity 
    * @desc getting cursor entity from code.
    * @param {String} cursor_marker - marker of active element.
    * @return {object} - entity of active element.
    * @mamberof Director
    * @instance
    */
    this.getCursorEntity = function(cursor_marker)
    {
      var active_char = this
                        .concrete_entity
                        .getElementsByClassName(cursor_marker)[0] || false;
      if(active_char)
      {
        return active_char;
      }
      else
      {
        console.log('getCursorEntity - has error');
        return false;
      }
    }

  /**
    * @function getBeforeEntity
    * @desc getting entity that goes before element.
    * @param {String} entity - marker of active element.
    * @return {object} - entity of previous element of active element.
    * @mamberof Director
    * @instance
    */
    this.getBeforeEntity = function(entity)
    {      
      var previouse = entity.previousSibling || false;
      
      if(previouse)
      {
        return previouse;
      }
      else
      {
        return false;
      }
    }
    
  /**
    * @function getNextEntity
    * @desc getting entity that goes after element.
    * @param {String} entity - marker of active element.
    * @return {object} - entity of previous element of active element.
    * @mamberof Director
    * @instance
    */
    this.getNextEntity = function(entity)
    {
      if(entity)
      {
        var next = entity.nextSibling;

        if(next)
        {
          return next;
        }
        else
        {
          return false;
        }
      }
      else
      {
        return false;
      }
    }
    
  /**
    * @function getParentWord 
    * @desc getting parent word entity if it has.
    * @return {object} - entity of parent word.
    * @mamberof Director
    * @instance
    */
    this.getParentWord = function()
    { 
      var parent = this
                  .concrete_entity
                  .getElementsByClassName('parent')[0] 
                  || false;
      if(parent)
      {
        return parent;
      }
      else
      {
        return false;
      }
    }
    
  /**
    * @function getLastElement 
    * @desc searching for an last element of the word.
    * @param {object} word - entity of word.
    * @return {object} - entity of last element of the word.
    * @mamberof Director
    * @instance
    */
    this.getLastElement = function(word)
    { 
      var element = word.childNodes[word.childNodes.length-1] || false;
      
      if(element)
      {
        return element;
      }
      else
      {
        return false;
      }
    }
    
  /**
    * @function getCursorPosition 
    * @desc returning position of cursor inside of the word or etc.
    * @param {object} cursor - cursor entity.
    * @return {number} - index of cursor.
    * @mamberof Director
    * @instance
    */
    this.getCursorPosition = function(cursor)
    { 
      var active_char_index = 0;
      
      // searching a position of the word 
      for(var i=0; i<cursor.parentElement.childNodes.length-1; i++)
      {
        var char_class = cursor.parentElement.childNodes[i].className;
        var char_classes = char_class.split(" ");
        if(char_classes.indexOf('active') >= 0)
        {
          break;
        }
        active_char_index++;
      }
      
      return active_char_index;
    }
    // alternative: 
    // var i = Array.prototype.indexOf.call(e.childNodes, someChildEl);  > ie9

  /**
    * @function getAllAfter 
    * @desc return array of elements, that line after current element
    * @param {object} element - after that element we starting to searching another
    * @return {Array} - elements that will be cutted from a line
    * @mamberof Director
    * @instance
    */
//    !!!!!!!!!!!
//    !!!!!!!!!!!
//    its already exist
//    !!!!!!!!!!!
//    !!!!!!!!!!!
    this.getAllAfter = function(element)
    { 
      var elements = [];
      
      if(element.nextSibling){
        while(element.nextSibling)
        {
          element = element.nextSibling

          elements.push(element.outerHTML);
        }

        return elements;
      }
      else
      {
        return [];
      }
    }

  /**
    * @function getIndexOfElement 
    * @desc get index of element with some className.
    * @param {String} class_of_element - class of searching element.
    * @param {object} parent - parent in which we need to get position of cursor.
    * @return {numeral} - index of serching element.
    * @mamberof Director
    * @instance
    */
    this.getIndexOfElement = function(class_of_element, parent)
    {
      try
      {
        var target = parent.getElementsByClassName(class_of_element)[0];
      }
      catch(e)
      {
        var target = false;
      }

      if(target)
      {
        var index = [].indexOf.call(parent.childNodes, target);

        return index*1;        
      }
      else
      {
        return -1;
      }
    }
    
  /**
    * @function collectSignifier 
    * @desc get signifiers string that lie in cursors area.
    * @param {Object} element - class of searching element.
    * @return {numeral} - string with signifiers.
    * @mamberof Director
    * @instance
    */
    this.collectSignifier = function(cursor)
    {
      if(cursor)
      {
        var final_string = cursor.innerHTML;
        
        var current_position = cursor;
        
        // going to the left:
        while((this.isSignifier(this.getBeforeEntity(current_position)))
              &(!this.isSpace(this.getBeforeEntity(current_position))))
        {
          current_position = this.getBeforeEntity(current_position);
          
          final_string = current_position.innerHTML + final_string;
        }
        
        current_position = cursor;
        
        // going to the right:
        while((this.isSignifier(this.getNextEntity(current_position)))
              &(!this.isSpace(this.getNextEntity(current_position))))
        {
          current_position = this.getNextEntity(current_position);
          
          final_string = final_string + current_position.innerHTML;
        }
        
        return final_string;
      }
      else
      {
        return false;
      }
    }
    
  /**
    * @function getLastNonSpaceSignifier 
    * @desc get last in row signifier that not space.
    * @param {Object} cursor - class of cursor.
    * @param {String} position - class of searching element ('left', 'right').
    * @return {Object} - position where must make something.
    * @mamberof Director
    * @instance
    */
    this.getLastNonSpaceSignifier = function(cursor, position)
    {
      if(cursor)
      {
        var final_object = cursor;
        
        var current_position = cursor;
        
        // going to the left:
        if(position == 'left')
        {
          while((this.isSignifier(this.getBeforeEntity(current_position)))
                &(!this.isSpace(this.getBeforeEntity(current_position))))
          {
            current_position = this.getBeforeEntity(current_position);

            final_object = current_position;
          }
        }
        else if(position == 'right')
        {
          // going to the right:
          while((this.isSignifier(this.getNextEntity(current_position)))
                &(!this.isSpace(this.getNextEntity(current_position))))
          {
            current_position = this.getNextEntity(current_position);

            final_object = current_position;
          }  
        }
        
        
        return final_object;
      }
      else
      {
        return false;
      }
    }
    
  /**
    * @function getCurrentUnique
    * @desc returning current unique index.
    * @param {String} name - the name which will be unique.
    * @mamberof Director
    * @instance
    */
    this.getCurrentUnique = function(name)
    { 
      var current_index = this.unique_index.getCurrentIndex();
      
      var current_position = concrete_entity
                            .getElementsByClassName(this.prefix 
                                                    + name 
                                                    + '-'
                                                    + current_index);

      return current_position;
    }
    
  /**
    * @function getElementsAfter
    * @desc clean line content from unnecessary elements 
    * @mamberof Director
    * @instance
    * @param {Object} word - container that contain separated characters with word
      that must be exploded.
    * @return {Array} - string with word.
    */
//    !!!!!!!!!!
//    !!!!!!!!!!
//    This is already exist
//    !!!!!!!!!!
//    !!!!!!!!!!
    this.getElementsAfter = function(element)
    {
      var result = '';
      
      var current_position = element;
      
      if(current_position)
      {
        while(current_position.nextSibling != undefined)
        {
          result += current_position.nextSibling.outerHTML;
             
          current_position = current_position.nextSibling;
        }
      }
    }
    
 /**
    * @function getLeftUniqueElement 
    * @desc getting last signifier element in the row of it.
    * @param {Object} element - html element in row of signifier elements.
    * @param {String} parametrs.start - from where must start process.
    * @param {String} parametrs.end - where process must stop.
    * @mamberof Director
    * @instance
    */
//    !!!!!!!!
//    !!!!!!!!
//      need to rename according functions
//    !!!!!!!!
//    !!!!!!!!
    this.getLeftUniqueElement = function(element, parametrs)
    { 
      if(element)
      {   
        if(!parametrs)
        {
          var current_position = element;

          // going to the left:
          while((this.isSignifier(this.getBeforeEntity(current_position)))
                &(!this.isSpace(this.getBeforeEntity(current_position)))
                &(!this.isStart(this.getBeforeEntity(current_position))))
          {

            current_position = this.getBeforeEntity(current_position);

          }
     
        }
        else
        {
          var current_position = element;
          
          var positions = new Array();
                    
          // add class to cursor element
          current_position = element;
          positions.push(element);
                    
          // going to the left:
          while((this.isSignifier(this.getBeforeEntity(current_position)))
                &(!this.isSpace(this.getBeforeEntity(current_position)))
                &(!this.isStart(this.getBeforeEntity(current_position))))
          {
            current_position = this.getBeforeEntity(current_position);
            
            positions.unshift(current_position);
          }
          
          current_position = positions[parametrs.start];
          
        }
        
        return current_position;
      }
      else
      {
        return false;
      }
    
    }
                  
//////////////////
// Getting section 
//////////////////

//////////////////
// Make section 
//////////////////
    
  /**
    * @function makeItParentWord 
    * @desc making a word as parent word.
    * @param {object} before_entity - element what must become a parent word.
    * @mamberof Director
    * @instance
    */
//    !!!!!!!
//    !!!!!!!
//    make it for every objects
//    !!!!!!!
//    !!!!!!!
    this.makeItParentWord = function(before_entity)
    { 
      if(before_entity)
      {
        before_entity.className = this.prefix + 'word parent';
      }
    }
    
  /**
    * @function makeItWord 
    * @desc give the class name of word.
    * @param {object} element - element that must become a word.
    * @param {Array} parameter - it is an additional parameter (keyword, parameter)
      if you add keyword, than it remowve "parant" from class and the same for parametr.
    * @mamberof Director
    * @instance
    */
    this.makeItWord = function(element, parameter)
    { 
      if(parameter)
      {
        if(parameter.indexOf('keyword') < 0 )
        {
          element.classList.remove('keyword'); 
        }
        if(parameter.indexOf('parent') < 0)
        {
          element.classList.remove('parent');
        } 
      }
      else if(!parameter)
      {
        element.className = this.prefix+('word');
      }
    }
    
  /**
    * @function activate 
    * @desc activate a cursor for an element.
    * @param {object} element - html element for which will be generated class name 
      with "active" ending.
    * @mamberof Director
    * @instance
    */
    this.activate = function(element)
    { 
      if(element)
      {
        if(element.className == this.prefix + 'line-start')
        {
          element.className = this.prefix + 'line-start ' + this.active;
        }
        else if(element.className == this.prefix + 'word')
        {
          element.className = this.prefix + 'word ' + 'parent';
        }
        else
        {
          element.className = this.class_generator
                                  .setPrefix('wet-')
                                  .mainClass(element.innerHTML)
                                  .space()
                                  .subClass(element.innerHTML)
                                  .space()
                                  .generate()
                                  + this.active;  
          
        }
      }
      else
      {
        console.log('activate - has error');
        return false;
      }
    }
    
  /**
    * @function deactivate 
    * @desc deactivate a cursor for an element
    * @param {object} element - html element for which will be generated class name.
    * @mamberof Director
    * @instance
    */
    this.deactivate = function(element)
    { 
      var line_start_class = this.prefix + "line-start";
      
      var tab_class = this.prefix + "tab";
      
      if(!(typeof(element)=='string'))
      {
        if(element.className.split(' ')[0] == line_start_class)
        {
          element.className = this.prefix + "line-start";
        }
        else if(element.className.split(' ').indexOf(tab_class) >= 0)
        {
          element.className = this.prefix + 'signifier'
                            + ' '
                            + this.prefix + 'tab';
        }
        else
        {
          element.className = this.class_generator
                                  .setPrefix(this.prefix)
                                  .mainClass(element.innerHTML)
                                  .space()
                                  .subClass(element.innerHTML)
                                  .generate();  
        }
      }
      else
      {
        var new_element = concrete_entity.getElementsByClassName(element)[0];
        new_element = this.class_generator
                          .setPrefix(this.prefix)
                          .mainClass(element.innerHTML)
                          .space()
                          .subClass(element.innerHTML)
                          .generate(); 
      }
    }

  /**
    * @function setClass 
    * @desc give class according an element.
    * @param {object} element - html element for which will be generated class name. 
    * @mamberof Director
    * @instance
    */
    this.setClass = function(element)
    { 
      if(element)
      {
        element.className = this.class_generator
                                .setPrefix(this.prefix)
                                .mainClass(element.innerHTML)
                                .space()
                                .subClass(element.innerHTML)
                                .generate();  
      }
      else
      {
        console.log('deactivate - has error');
        return false;
      }
    }
    
  /**
    * @function plus 
    * @desc add some element after this, if this have a next element.
    * @param {object} element - element after which will be added content.
    * @param {String} content - content which will be added after element.
    * @mamberof Director
    * @instance
    */
    this.plus = function(element, content)
    {
      // cool string for adding something after active elements
      element.parentNode.insertBefore(content, element.nextSibling);
    }

    /**
    * @function makeAllChildLess 
    * @desc divide all elements in words with undivided content.
    * @param {string} action - what we whant to do with line: divide, concat.
    * @param {object} line - line which must be exploded.
    * @mamberof Director
    * @instance
    */
    //    !!!!!!!
    //    !!!!!!!
    //    rename according functionality
    //    !!!!!!!
    //    !!!!!!!
    this.makeAllChildLess = function(action, line)
    {
      if(line)
      {
        var line_elements = line.childNodes || false;

        if(line_elements)
        {
          for(var i=0; i<line_elements.length; i++)
          {
            if((line_elements[i].className.split(' ').indexOf('parent') < 0)
               &&(line_elements[i].className.split(' ').indexOf(this.prefix+'word') >= 0))
            {
              if((action == 'divide')|(action == 'concat'))
              {
                line_elements[i].innerHTML = this.divider[action](line_elements[i]);
              }
            }
          }  
        }
        else
        {
          return false;
        }
      }
      else
      {
        return false;
      }
    }  
  
  /**
    * @function InheriteUniqueWith 
    * @desc activate a cursor for an element.
    * @param {object} element - html element for wich will be generated unique class name.
    * @param {staring} name - the name which will be unique.
    * @mamberof Director
    * @instance
    */
    this.InheriteUniqueWith = function(element, name)
    { 
      if(element)
      {
        if(this.isCursor(element))
        {
          var active = ' ' + this.active;
        }
        else
        {
          var active = '';
        }
        element.className = this.class_generator
                                .setPrefix('wet-')
                                .mainClass(element.innerHTML)
                                .space()
                                .subClass(element.innerHTML)
                                .space()
                                .inherite(name)
                                .generate()
                                + active;  
      }
      else
      {
        console.log('activate - has error');
        return false;
      }
    }
    
  /**
    * @function explodeAllChildLess 
    * @desc divide all elements in childless words.
    * @param {object} line - line which must be exploded.
    * @mamberof Director
    * @instance
    */
    this.explodeAllChildLess = function(line)
    {
      if(line)
      {
        var line_elements = line.childNodes || false;

        if(line_elements)
        {
          for(var i=0; i<line_elements.length; i++)
          {
            if((line_elements[i].className.split(' ').indexOf('parent') < 0)
               &&(line_elements[i].className.split(' ').indexOf(this.prefix+'word') >= 0))
            {
              line_elements[i].innerHTML = this.divider.divide(line_elements[i])
            }
          }  
        }
        else
        {
          return false;
        }
      }
      else
      {
        return false;
      }
    }

  /**
    * @function implodeAllChildLess 
    * @desc concat all elements in childless words.
    * @param {object} line - line which must be imploded.
    * @mamberof Director
    * @instance
    */
    this.implodeAllChildLess = function(line)
    {
      if(line)
      {
        var line_elements = line.childNodes || false;

        if(line_elements)
        {
          for(var i=0; i<line_elements.length; i++)
          {
            if((line_elements[i].className.split(' ').indexOf('parent') < 0)
               &&(line_elements[i].className.split(' ').indexOf(this.prefix+'word') >= 0))
            {
              line_elements[i].innerHTML = this.divider.concat(line_elements[i]);
            }
          }
        }
        else
        {
          return false;
        }
      }
      else
      {
        return false;
      }
    }
    
  /**
    * @function makeItUniqueWith 
    * @desc add unique index to a word and paste it all to the elements class.
    * @param {object} element - html element for which will be generated unique class name.
    * @param {string} name - the name which will be unique.
    * @mamberof Director
    * @instance
    */
    this.makeItUniqueWith = function(element, name)
    { 
      if(element)
      {
        if(this.isCursor(element))
        {
          var active = ' ' + this.active;
        }
        else
        {
          var active = '';
        }
        
        element.className = this.class_generator
                                .setPrefix('wet-')
                                .mainClass(element.innerHTML)
                                .space()
                                .subClass(element.innerHTML)
                                .space()
                                .unique(name)
                                .generate()
                                + active;  
      }
      else
      {
        console.log('activate - has error');
        return false;
      }
    }
        
  /**
    * @function makeAllUniqueWith 
    * @desc make an array of elements with unique class.
    * @param {object} element - html element from what which will be generated unique 
      class name.
    * @param {String} name - the name which will be unique.
    * @param {String} parametrs.start - from where must start process.
    * @param {String} parametrs.end - where process must stop.
    * @mamberof Director
    * @instance
    */
    this.makeAllUniqueWith = function(element, name, parametrs)
    { 
      if(element)
      {   
        if(!parametrs)
        {
          var current_position = element;

          this.makeItUniqueWith(current_position, name);

          // going to the left:
          while((this.isSignifier(this.getBeforeEntity(current_position)))
                &(!this.isSpace(this.getBeforeEntity(current_position))))
          {

            current_position = this.getBeforeEntity(current_position);

            this.InheriteUniqueWith(current_position, name);
          }

          current_position = element;

          // going to the right:
          while((this.isSignifier(this.getNextEntity(current_position)))
                &(!this.isSpace(this.getNextEntity(current_position))))
          {

            current_position = this.getNextEntity(current_position);

            this.InheriteUniqueWith(current_position, name);
          }       
        }
        else
        {
          var current_position = element;
          
          var positions = new Array();
          
          // going to the right:
          while((this.isSignifier(this.getNextEntity(current_position)))
                &(!this.isSpace(this.getNextEntity(current_position)))
                &(!this.isStart(this.getNextEntity(current_position))))
          {
            current_position = this.getNextEntity(current_position);
            
            positions.push(current_position);
          }   
          
          // add class to cursor element
          current_position = element;
          positions.unshift(element);
                    
          // going to the left:
          while((this.isSignifier(this.getBeforeEntity(current_position)))
                &(!this.isSpace(this.getBeforeEntity(current_position)))
                &(!this.isStart(this.getBeforeEntity(current_position))))
          {
            current_position = this.getBeforeEntity(current_position);
            
            positions.unshift(current_position);
          }

          
          var single_time_flag = true;          
          for(var i=parametrs.start; i<=parametrs.end; i++)
          {
            if(single_time_flag)
            {
              this.makeItUniqueWith(positions[i], name);
              
              single_time_flag = false;
            }
            else
            {
              this.InheriteUniqueWith(positions[i], name);
            }
          }
          
//          console.log(positions);
          
          
        }
        
        return true;
      }
      else
      {
        return false;
      }
    
    }
    
    
//////////////////
// Make section 
//////////////////
    
//////////////////
// Delete section 
//////////////////
    
  /**
    * @function deactivatePreviouse
    * @desc deactivating cursor if it on word space.
    * @mamberof Director
    * @instance
    */
//    !!!!!!!
//    !!!!!!!
//    not realy necessary function 
//    !!!!!!!
//    !!!!!!!
    this.deactivatePreviouse = function()
    {
			// element with class 'active' 
			var active_element = concrete_entity.getElementsByClassName(this.active)[0]; 
			
			var class_generator = new Char_Class_Generator(this.prefix);
			
			// if element is exist than change his class to native without 'active' mark
			if(active_element != undefined)
			{
        if(active_element.className.split(" ").indexOf(this.prefix + 'line-start') >= 0)
        {
          active_element.className = this.prefix + 'line-start';
        }
        else
        {
          active_element.className = class_generator
                                    .setPrefix(this.prefix)
                                    .mainClass(active_element.innerHTML)
                                    .space()
                                    .subClass(active_element.innerHTML)
                                    .generate();
          
        }
			}
    }

  /**
    * @function delete 
    * @desc delete some element.
    * @param {object} element - html element which will be deleted.
    * @mamberof Director
    * @instance
    */
    this.delete = function(element)
    { 

      if(this.unique_index.isUnique(element))
      {
        this.combination.removeLineComment();
      }
      
      element.parentNode.removeChild(element);
    }

    
  /**
    * @function deleteAllAfter 
    * @desc delete elements, that lie after current element
    * @param {object} element - after that element we starting to deleting
    * @mamberof Director
    * @instance
    */
    this.deleteAllAfter = function(element)
    { 
      var elements =[];
      
      while(element.nextSibling)
      {
        element = element.nextSibling;
        
        elements.push(element);
        
      }
      
      for(var i = 0; i<elements.length; i++)
      {
        this.delete(elements[i]);
      }
    }
    
  /**
    * @function cutAllAfter 
    * @desc cut elements, that lie after current element
    * @param {object} element - after that element we starting to cuted
    * @mamberof Director
    * @instance
    */
    this.cutAllAfter = function(element)
    { 
      var elements = [];
      
      while(element.nextSibling)
      {
        element = element.nextSibling;
        
        elements.push(element);
        
        this.delete(element);
      }
      
      for(var i = 0; i<elements.length; i++)
      {
        this.delete(elements[i]);
        
        elements[i] = elements[i].outerHTML;
      }
      
      return elements;
    }
    
  /**
    * @function deleteElementsAfter
    * @desc clean line content from unnecessary elements 
    * @mamberof Director
    * @instance
    * @param {Object} word - container that contain separated characters with word
      that must be exploded.
    * @return {Array} - string with word.
    */
//    !!!!!!!
//    !!!!!!!
//    such function already exist
//    !!!!!!!
//    !!!!!!!
    this.deleteElementsAfter = function(element)
    {
      var result = '';
      
      var current_position = element;
      
      var parent = element.parentNode;
      
      if(current_position)
      {
        while(current_position.nextSibling != undefined)
        {
          parent.removeChild(current_position.nextSibling);
        }
      }
    }
    
  /**
    * @function cutElementsAfter
    * @desc clean line content from unnecessary elements 
    * @mamberof Director
    * @instance
    * @param {Object} word - container that contain separated characters with word
      that must be exploded.
    * @return {Array} - string with word.
    */
//    !!!!!!!
//    !!!!!!!
//    such function already exist
//    !!!!!!!
//    !!!!!!!
    this.cutElementsAfter = function(element)
    {
      var result = '';
      
      var current_position = element;
      
      var parent = element.parentNode;
      
      if(current_position)
      {
        while(current_position.nextSibling != undefined)
        {          
          result += current_position.nextSibling.outerHTML;
          
          parent.removeChild(current_position.nextSibling);
        }
      }
      
      return result;
    }
/////////////////
// Delete section 
/////////////////
    
///////////////////
// Creating section 
///////////////////
  /**
    * @function create 
    * @desc create some element.
    * @param {String} type - which element must be created.
    * @param {String} content - text which will be in content when it will be created. 
    * @param {String} status - is element active or not.
    * @return {object} - entity of created object.
    * @mamberof Director
    * @instance
    */
    this.create = function(type, content, status)
    { 
      if(type == 'line-start')
      {
        return this.createLineStart(content, status);
      }
      else if(type == 'word')
      {
        return this.createWord(content, status);
      }
      else if(type == 'char')
      {
        return this.createChar(content, status);
      }      
      else if(type == 'tab')
      {
        return this.createTab(content, status);
      }
      else if(type == 'line')
      {
        return this.createLine(content, status);
      }
      else if(type == 'lineComment')
      {
        return this.createLineComment(content, status);
      }
      
    }
    
  /**
    * @function createLineStart 
    * @desc create start element.
    * @param {String} content - text which will be in content when it will be created. 
    * @param {String} status - is element active or not.
    * @return {object} - entity of created object.
    * @mamberof Director
    * @instance
    */
    this.createLineStart = function(content, status)
    {
      var first_symbol = document.createElement('span');
        
      first_symbol.className = this.prefix + 'line-start';
        
      if(status == 'active')
      {
        first_symbol.className += ' ' + this.active;
      }
        
      var first_symbol_content = document.createTextNode(content);
        
      first_symbol.appendChild(first_symbol_content);
      
      return first_symbol;     
    }

  /**
    * @function createWord 
    * @desc create word entity.
    * @param {String} content - text which will be in content when it will be created.
    * @param {String} status - is element active or not.
    * @return {object} - entity of created object.
    * @mamberof Director
    * @instance
    */
    this.createWord = function(content, status)
    {
      // create a word object 
      var word = document.createElement('span');
      // say to it that it will be have a children in it
      if(status == 'active')
      {
        word.className = 'wet-word parent';
        
        // childs content
        var word_content = document.createTextNode(content);
        // childs container
        var character_holder = document.createElement('span');
        // generating of character class 
      }
      else
      {
        word.className = 'wet-word';
        
        var character_holder = content;
      }
      if(status == 'active')
      {
        character_holder.className = this.class_generator
                                    .setPrefix('wet-')
                                    .mainClass(content)
                                    .space()
                                    .subClass(content)
                                    .space()
                                    .generate() 
                                    + 'active'; 
        // adding new character in container
        character_holder.appendChild(word_content);
        // adding character object to the word 
        word.appendChild(character_holder);
      }
      else
      {

        // adding character object to the word 
        word.innerHTML = character_holder;
      }


        
      return word;    
    }
    
  /**
    * @function createChar 
    * @desc create character entity.
    * @param {String} content - text which will be in content when it will be created.
    * @param {String} status - is element active or not. 
    * @return {object} - entity of created object.
    * @mamberof Director
    * @instance
    */
    this.createChar = function(content, status)
    {
      var char = document.createTextNode(content);
      // childs container
      var character_holder = document.createElement('span');
      // generating of character class 
      if(status == 'active')
      {
        character_holder.className = this.class_generator
                                    .setPrefix('wet-')
                                    .mainClass(content)
                                    .space()
                                    .subClass(content)
                                    .space()
                                    .generate() 
                                    + 'active'; 
      }
      else
      {
        character_holder.className = this.class_generator
                                    .setPrefix('wet-')
                                    .mainClass(content)
                                    .space()
                                    .subClass(content)
                                    .generate(); 
      }
      // adding new character in container
      character_holder.appendChild(char);
        
      return character_holder;    
    }
    
  /**
    * @function createTab
    * @desc create tab entity.
    * @param {String} status - is element active or not. 
    * @return {object} - entity of created object.
    * @mamberof Director
    * @instance
    */
    this.createTab = function(content, status)
    {
      // creating a tab object
      var tab = document.createElement('span');
      // generating of character class 
      if(status == 'active')
      {
        tab.className = 'wet-'+'signifier'+' '+'wet-'+'tab'+' '+'active';
      }
      else
      {
        tab.className = 'wet-'+'signifier'+' '+'wet-'+'tab';
      }
      // adding new character in container
      tab.innerHTML = content;
        
      return tab;    
    }
    
  /**
    * @function createLine
    * @desc create line entity.
    * @param {String} content - text which will be in content when it will be created. 
    * @param {number} index - lines index number. 
    * @return {object} - entity of created object.
    * @mamberof Director
    * @instance
    */
    this.createLine = function(content, index)
    {
      var line = document.createElement('li');
      
      
      line.className = this.prefix + 'line';
      
      if(typeof(content) == 'string')
      {
        line.innerHTML = content;
      }
      else
      {
        line.appendChild(content);
      }
        
      return line;    
    }
    
  /**
    * @function createlineComment
    * @desc create line coment entity.
    * @param {String} content - text which will be in content when it will be created. 
    * @param {String} status - status of comment. 
    * @return {object} - entity of created object.
    * @mamberof Director
    * @instance
    */
    this.createLineComment = function(content, status)
    {
      var line_comment = document.createElement('span');
      
      var index = this.unique_index.getCurrentIndex();
      
      line_comment.className = this.prefix + 'line_comment-' + index;
      
      if(typeof(content) == 'string')
      {
        line_comment.innerHTML = content;
      }
      else
      {
        line_comment.appendChild(content);
      }
        
      return line_comment;    
    }
    
///////////////////
// Creating section 
///////////////////


//////////////////
// Search section 
//////////////////
    
  /**
    * @function findCursorPosition
    * @desc searching for an number of char position on which cursor is stand on 
      line, if it dont find a cursor, it simply return a length of line.
    * @param {object} cursor - entity of cursor. 
    * @param {object} line - line on which we must search a cursor. 
    * @return {number} - number of char position on which cursor is stand on line.
    * @mamberof Director
    * @instance
    */
    this.findCursorPosition = function(cursor, line)
    {
      var parent_word = cursor.parentNode || false;
      
      var character_count = 0;
      
      if(!line)
      {
        if(parent_word.className.split(' ')[0] != this.prefix + 'line')
        {
          var line = parent_word.parentNode || false; 
        }
        else
        {
          var line = parent_word || false
        }
      }
      
      if(line)
      {
        var lines_elements = line.childNodes;
        
        // separating all characters
        this.explodeAllChildLess(line);
        
        // counting characters before cursor
        for(var i=0; i<lines_elements.length; i++)
        {
          if(this.isWord(lines_elements[i]))
          {
            var elements_elements = lines_elements[i].childNodes;
            
            if(this.isParentWord(lines_elements[i]))
            {
              character_count += this.getIndexOfElement('active', lines_elements[i]);
              
              break;
            }
            else
            {
              character_count += elements_elements.length;
            }
          }
          else if(!(this.isWord(lines_elements[i])))
          {
            if(this.isCursor(lines_elements[i]))
            {              
              break;
              
              character_count++;
            }
            else
            {
              character_count++;
            }
          }
        }
                
        // compound characters before cursor
        this.makeAllChildLess('concat', line);
        // or this.implodeAllChildLess('concat', line);
      }      
      return character_count;    
    }
    
 /**
    * @function setCursorOnPosition
    * @desc seting cursor on some position.
    * @param {object} position - entity of cursor. 
    * @param {object} line - line on which we must search a cursor. 
    * @mamberof Director
    * @instance
    */
    this.setCursorOnPosition = function(position, line)
    {
      var character_count = 0;
            
      if(line)
      {
        var lines_elements = line.childNodes;
        
        // separating all characters
        this.explodeAllChildLess(line);
        
        // counting characters before cursor
        for(var i=0; i<lines_elements.length; i++)
        {
          if(this.isWord(lines_elements[i]))
          {
            var elements_elements = lines_elements[i].childNodes;
            
            var count_shot = character_count;
            
            character_count += elements_elements.length;
            
            if(character_count >= position)
            {
              character_count = position - count_shot-1;
              
              this.makeItParentWord(lines_elements[i]);
              
              this.activate(lines_elements[i].childNodes[character_count]);
                            
              break;
            }
          }
          else if(this.isStart(lines_elements[i]))
          {
            if(character_count == position)
            {
              this.activate(lines_elements[i]);
              
              break;
            }
          }
          else
          {
            character_count++;
            
            if(character_count == position)
            {
              this.activate(lines_elements[i]);
              
              break;
            }
          }
        }
        
        // compound characters before cursor
        this.makeAllChildLess('concat', line);
        // or this.implodeAllChildLess('concat', line);
        
      }      
      return character_count;    
    }
        
//////////////////
// Search section 
//////////////////
    
    
  }  
  return Director;
})() 