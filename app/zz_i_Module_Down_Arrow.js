/**
  * @function down_arrow
  * @author Ivan Kaduk
  * @copyright Ivan Kaduk 2016.
  * @license cc-by-nc-sa 4.0
  * @desc this module need to emulate "down arrow" key features.
  * @param {object} options.object - entity of editors object.
  * @param {int} options.index - index of current editor element on document.
  * @memberof Module
  * @instance
  */
Module.getInstance().down_arrow = function(options)
{
  // standard block of initialization of dependencies		
  var class_generator = new Char_Class_Generator('wet-');
  var concrete_entity = options.object.container[options.index];
  var divider = new Divider();
  var director = new Director(concrete_entity, "wet-", "active");
  var word = director.getParentWord();
  var cursor_entity = director.getCursorEntity('active');
  var after_cursor = director.getNextEntity(cursor_entity);
  var before_cursor = director.getNextEntity(cursor_entity);
  var cursor_parent = cursor_entity.parentNode;
  
  // must be fixed !!!!!!!!!
  var line = word.parentNode || false;
  
  if(!line)
  {
    line = cursor_parent || false;
  }
  
  var next_line = director.getNextEntity(line);
  
  var next_line_length = director.findCursorPosition(cursor_entity, next_line);
  next_line_length--;
    
  // If next line is not:
  if(!next_line)
  {
    console.log('bad')
  }
  // if next line is:
  else
  {
    var cursor_position = director.findCursorPosition(cursor_entity);

    director.deactivate(cursor_entity);
    
    // if we going from a word:
    if(word)
    {
      if(next_line_length < cursor_position)
      {
        cursor_position = next_line_length;
      }
      
      word.innerHTML = divider.concat(word);

      director.makeItWord(word);
      
      // with word going something wrong so i must make decrementing for prevent it
      director.setCursorOnPosition(cursor_position, next_line);
    }
    // if we going not from word:
    else
    {    
      if(next_line_length < cursor_position)
      {
        cursor_position = next_line_length;
      }
      
      director.setCursorOnPosition(cursor_position, next_line);
    }

    // index of created line !!!!!!
    options.object.current_line[options.index]++;
  }
    
}

var module = new Module.getInstance();
module.addFunction('40', 'down_arrow');