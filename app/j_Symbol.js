	///////////////////////////////////
  /*          SINGELTON            */
  ///////////////////////////////////

	///////////////////////////////////
  /*          Active Record        */
  ///////////////////////////////////

/**
  * @name Symbol
  * @author Ivan Kaduk
  * @copyright Ivan Kaduk 2016.
  * @license cc-by-nc-sa 4.0
  * @class
  * @classdesc it is singelton which contain current symbol, 
    and have functional to work with it.
  * @namespace Symbol
  * @constructs Symbol
  * @example var Symbol = Symbol.getInstance();
  */
  var Symbol = (function () {
    var instance;
    function createInstance() 
    {
          
      var current_symbol = '';
      
    /**
      * @public
      * @function
      * @name setCurrentSymbol
      * @desc setting symbol.
      * @mamberof Symbol
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
      * @mamberof Symbol
      * @instance
      * @return {String} - symbol from symbol buffer.
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