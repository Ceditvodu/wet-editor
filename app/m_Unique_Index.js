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
  var Unique_index = (function () 
  {
    var instance;
    function createInstance() 
    {
          
      var indexes = [];
      var current_index = [];
      
    /**
      * @public
      * @function
      * @name addIndex
      * @desc adding index to collection.
      * @mamberof Key_Scope
      * @instance
      * @param {numeral} index - unique index.
      * @param {String} name - name of class to wich will be added this index.
      */
      function addIndex(index, name) 
      {
        if(indexes.length > 0)
        {
          if(_compareIndexes(index, indexes) < 0)
          {
            indexes.push([index, name]);
          }
        }
        else
        {
          indexes.push([index, name]);
        }
      }
      
    /**
      * @public
      * @function
      * @name setCurrentIndex
      * @desc setting index as a curent.
      * @mamberof Key_Scope
      * @instance
      * @param {numeral} index - unique index.
      * @param {String} name - name of class to wich will be added this index.
      */
      function setCurrentIndex(index, name) 
      {
        current_index = [index, name];
      }
      
    /**
      * @public
      * @function
      * @name getCurrentIndex
      * @desc getting current index.
      * @mamberof Key_Scope
      * @instance
      */
      function getCurrentIndex() 
      {
        console.log(current_index);
        
        return current_index;
        
      }
    
    /**
      * @private
      * @function
      * @name _compareIndexes
      * @desc comparing two unique indexes.
      * @mamberof Key_Scope
      * @instance
      * @param {Array} index - unique index.
      * @param {Array} collection - Array with indexes - name of class to wich will.
        be added this index.
      * @return {numeral} index of arrays element.
      */
      function _compareIndexes(index, collection) 
      {
        for(var i=0; i < collection.length; i++)
        {
          if(collection[i][0] == index[0])
          {
            return i;
          }
          
          return -1
        }
      }
 		    
      return {
        addIndex: addIndex
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