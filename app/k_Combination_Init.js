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
      this.editors_combination_map = {};
      
      var concrete_entity;
      
      var prefix = '';
      
      var active = '';
      
      var action;
                  
      // combination map that in future will be loading from file 
      // according languadge
      var combinations_map = new Array();
      
      // file javascript_keywords.js
      combinations_map.push(javascript_keywords);
      // file javascript_operators.js
      combinations_map.push(javascript_operators);
      
      
      init();
      
      console.log(this.editors_combination_map);

    /**
      * @function init
      * @desc start process of combination manipulations.
      * @mamberof Combination_Init
      * @instance
      */
      function init()
      {
        for(var i=0; i<combinations_map.length; i++)
        {
          // loop for combination map
          // converting from human readable type to some
          for(var type in combinations_map[i])
          { 
            if(combinations_map[i][type].type.start)
            {
              addCombination(type, 'start');
            }
            if(combinations_map[i][type].type.end)
            {
              addCombination(type, 'end');
            }
            if(combinations_map[i][type].type.startEnd)
            {
              addCombination(type, 'startEnd');
            }
          }
        }
//            console.log(this.editors_combination_map.f.u.n.c.t.i.o.n);
//            console.log(this.editors_combination_map['/']['*']);
//            console.log(this.editors_combination_map['*']['/']);
//            console.log(this.editors_combination_map['"']);
      }
      
    /**
      * @function setUp
      * @desc Setup all necessary dependencies.
      * @param {Object} concrete_entity - Entity which will contain current editor element.
      * @param {String} prefix - Prefix of all names in code.
      * @param {String} active - Class name for cursor entity.
      * @mamberof Combination_Init
      * @instance
      */
      function setUp(concrete_entity, prefix, active)
      {
        car = concrete_entity;
        
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
      * @mamberof Combination_Init
      * @instance
      */
      function addCombination(combination, diraction)
      {
        for(var i=0; i<combinations_map.length; i++)
        {
          if(combinations_map[i][combination])
          {
            var combination_symbols = combinations_map[i][combination].type[diraction].split('');
          }
        }        

        var current_position = this.editors_combination_map;

        for(var i=0; i<combination_symbols.length; i++)
        {
          if(current_position.name)
          {
            if(current_position.name.indexOf(combination_symbols[i]) >= 0)
            {
              current_position = current_position[combination_symbols[i]];
            }
            else
            {
              current_position.name.push(combination_symbols[i]);
              current_position[combination_symbols[i]] = {};
              current_position = current_position[combination_symbols[i]];
            }
          }
          else
          {
            current_position.name = [combination_symbols[i]];
            current_position[combination_symbols[i]] = {};
            current_position = current_position[combination_symbols[i]];
          }

          if(i==combination_symbols.length-1)
          {
            current_position.func = combination+'-'+diraction;
          }
        }
      }
    /**
      * @function addCombination
      * @desc adding combination to collection graph.
      * @param {String} combination - the word that must be compaired with combination map.
      * @param {String} dirapction - the role of word, is it start or is it end.
      * @mamberof Combination_Init
      * @instance
      */
      function runCombination(combination, parametrs)
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
//                console.log(current_position)
            
            try
            {
//              console.log(current_position['func'])
              if(current_position['func'] != undefined)
              {
                func = current_position['func'].split('-');
                
                function_name = func[0];
                
                argument = func[2];
                
                action[function_name](argument, parametrs)
              }
              else
              {
                action['clear']();
              }
            }
            catch(e)
            {
              console.log(e);
              action['clear']();
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