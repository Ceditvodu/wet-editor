	///////////////////////////////////
  /*          SINGELTON            */
  ///////////////////////////////////

	///////////////////////////////////
  /*          Active Record        */
  ///////////////////////////////////

/**
  * @name Unique_index
  * @author Ivan Kaduk
  * @copyright Ivan Kaduk 2016.
  * @license cc-by-nc-sa 4.0
  * @class
  * @classdesc it is singelton which contain all unique indexes, 
    and have functional to work with it.
  * @namespace Symbol
  * @constructs Symbol
  * @example var Symbol = Symbol.getInstance();
  */
  var Unique_index = (function () {
    var instance;
    function createInstance() 
    {
          
      var current_symbol = '';
      
    /**
      * @public
      * @function
      * @name setCurrentSymbol
      * @desc setting symbol.
      * @mamberof Key_Scope
      * @instance
      * @param {String} symbol - symbol from symbol buffer.
      */
      function setCurrentSymbol(symbol) {
        current_symbol = symbol;
      }
      
    /**
      * @public
      * @function
      * @name getCurrentSymbol
      * @desc getting symbol.
      * @mamberof Key_Scope
      * @instance
      * @return {String} symbol from symbol buffer.
      */
      function getCurrentSymbol() {
        return current_symbol;
      }
 		    
      return {
        setCurrentSymbol: setCurrentSymbol,
        getCurrentSymbol: getCurrentSymbol
      };
    }

    return {
      getInstance: function () {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      }
    };
  })();