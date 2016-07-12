///////////////////////////////////
/*           SINGLETON		       */
///////////////////////////////////	

/**
  * @name Module
  * @author Ivan Kaduk
  * @copyright Ivan Kaduk 2016.
  * @license cc-by-nc-sa 4.0
  * @class
  * @classdesc it is solution that helps to create additional mudules more 
    easely and implement it to application.
  * @namespace Module
  * @constructs Module
  * @example     Module.getInstance().modules_name = function(options)
                  {
                  // some code
                  }
                  var module = new Module.getInstance();
                  module.addFunction('8', 'modules_name');
  *
  */
  var Combination_Init = (function()
  {
    var instance;

    function createInstance() 
    {
      var editors_combination_map = {};
      // combination map that in future will be loading from file 
      // according languadge
      var combinations_map = {
        "lineComment":{
          "type":{
            "start":"//"
          }
        },
        "comment":{
          "type":{
            "start":"/*",
            "end":"*/"
          }
        },
        "stringOne":{
          "type":{
            "startEnd":"'"
          }
        },
        "stringTwo":{
          "type":{
            "startEnd":'"'
          }
        },
        "function":{
          "type":{
            "start":"function"          
          }
        }
      }
      
      init();
      
      console.log(editors_combination_map);

    /**
      * @function init
      * @desc start process of combination manipulations.
      * @mamberof Director
      * @instance
      */
      function init()
      {
        // loop for combination map
        // converting from human readable type to some
        for(var type in combinations_map)
        {
          
          if(combinations_map[type].type.start)
          {
            addCombination(type, 'start', combinations_map);
          }
          if(combinations_map[type].type.end)
          {
            addCombination(type, 'end', combinations_map);
          }
          if(combinations_map[type].type.startEnd)
          {
            addCombination(type, 'startEnd', combinations_map);
          }
        }
            console.log(editors_combination_map.f.u.n.c.t.i.o.n);
            console.log(editors_combination_map['/']['*']);
            console.log(editors_combination_map['*']['/']);
            console.log(editors_combination_map['"']);
      }

    /**
      * @function addCombination
      * @desc adding combination to collection graph.
      * @param {String} combination - the word that must be compaired with combination map.
      * @param {String} dirapction - the role of word, is it start or is it end.
      * @param {object} collection - combination map with element of what must be compared words.
      * @mamberof Director
      * @instance
      */
      function addCombination(combination, diraction, collection)
      {
        var combination_symbols = collection[combination].type[diraction].split('');

        var current_position = editors_combination_map;

        for(var i=0; i<combination_symbols.length; i++)
        {
          if(current_position.name)
          {
            if(current_position.name == combination_symbols[i])
            {
              current_position = current_position[combination_symbols[i]];
            }
            else
            {
              current_position.name = combination_symbols[i];
              current_position[combination_symbols[i]] ={};
              current_position = current_position[combination_symbols[i]];
            }

          }
          else
          {
            current_position.name = combination_symbols[i];
            current_position[combination_symbols[i]] ={};
            current_position = current_position[combination_symbols[i]];
          }

          if(i==combination_symbols.length-1)
          {
            current_position.func = combination+'_'+diraction;
          }
        }
      }
    
      return {
        //addFunction: addFunction			
      }
    }

    return {
      getInstance: function () {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      }
    };
  })()