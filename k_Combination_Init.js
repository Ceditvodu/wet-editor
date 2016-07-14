///////////////////////////////////
/*           SINGLETON		       */
///////////////////////////////////	

/**
  * @name Combination_Init
  * @author Ivan Kaduk
  * @copyright Ivan Kaduk 2016.
  * @license cc-by-nc-sa 4.0
  * @class
  * @classdesc it is class that help to work with reserved by specific language keywords
  and operands
  * @namespace Combination_Init
  * @constructs Combination_Init
  * @example Combination_Init.getInstance();
  */
  var Combination_Init = (function()
  {
    var instance;

    function createInstance() 
    {
      var editors_combination_map = {};
      
      var concrete_entity;
      
      var prefix = '';
      
      var active = '';
      
      var action;
                  
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
        "string-1":{
          "type":{
            "startEnd":"'"
          }
        },
        "string-2":{
          "type":{
            "startEnd":'"'
          }
        },
        "keyword-1":{
          "type":{
            "start":"function"          
          }
        },
        "keyword-2":{
          "type":{
            "start":"var"
          }
        },        
        "keyword-3":{
          "type":{
            "start":"void"
          }
        }
      }
      
      init();
      
      console.log(editors_combination_map);

    /**
      * @function init
      * @desc start process of combination manipulations.
      * @mamberof Combination_Init
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
            addCombination(type, 'start');
          }
          if(combinations_map[type].type.end)
          {
            addCombination(type, 'end');
          }
          if(combinations_map[type].type.startEnd)
          {
            addCombination(type, 'startEnd');
          }
        }
//            console.log(editors_combination_map.f.u.n.c.t.i.o.n);
//            console.log(editors_combination_map['/']['*']);
//            console.log(editors_combination_map['*']['/']);
//            console.log(editors_combination_map['"']);
      }

      function setUp(concrete_entity, prefix, active)
      {
        concrete_entity = concrete_entity;
        
        prefix = prefix;
        
        active = active;
        
        action = new Combination_Actions(concrete_entity, prefix, active);
      }
      
      
    /**
      * @function addCombination
      * @desc adding combination to collection graph.
      * @param {String} combination - the word that must be compaired with combination map.
      * @param {String} dirapction - the role of word, is it start or is it end.
      * @param {object} collection - combination map with element of what must be compared words.
      * @mamberof Combination_Init
      * @instance
      */
      function addCombination(combination, diraction)
      {
        var combination_symbols = combinations_map[combination].type[diraction].split('');

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
              current_position[combination_symbols[i]] = {};
              current_position = current_position[combination_symbols[i]];
            }
          }
          else
          {
            current_position.name = combination_symbols[i];
            current_position[combination_symbols[i]] = {};
            current_position = current_position[combination_symbols[i]];
          }

          if(i==combination_symbols.length-1)
          {
            current_position.func = combination+'-'+diraction;
          }
        }
      }
      
      function runCombination(combination)
      {
        if(combination != undefined)
        {
          var func = new Array(); 
          
          var function_name = '';
          
          var argument = '';
          
          var current_position = editors_combination_map || false;

          var combination_item = combination.split('');
          
          if(current_position != false)
          {
            for(var i=0; i<combination.length; i++)
            {
              try
              {
                current_position = current_position[combination_item[i]]; 
              }
              catch(e)
              {
                
              }
            }
            
            try
            {
              if(current_position['func'] != undefined)
              {
                func = current_position['func'].split('-');
                
                function_name = func[0];
                
                argument = func[2];
                
                action[function_name](argument)
              }
            }
            catch(e)
            {
              
            }
          }
        }
      }
    
      return {
        //addFunction: addFunction
        setUp: setUp,
        addCombination: addCombination,
        runCombination: runCombination
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