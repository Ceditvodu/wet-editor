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
      var current_index = '';
      
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
            
            setCurrentIndex(index);
          }
        }
        else
        {
          indexes.push([index, name]);
          
          setCurrentIndex(index);
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
      */
      function setCurrentIndex(index) 
      {
        current_index = index;
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
      * @public
      * @function
      * @name getIndexes
      * @desc getting indexes.
      * @mamberof Key_Scope
      * @instance
      */
      function getIndexes() 
      {
        console.log(indexes);
        
        return indexes;
        
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
      
      /**
      * @public
      * @function
      * @name isUnique
      * @desc comparing two unique indexes.
      * @mamberof Key_Scope
      * @instance
      * @param {Array} index - unique index.
      * @param {Array} collection - Array with indexes - name of class to wich will.
        be added this index.
      * @return {numeral} index of arrays element.
      */
      function isUnique(entity) 
      {
        if(typeof(entity) === "string")
        {
          var class_name = entity;
        }
        else if(typeof(entity) === "object")
        {
          var class_name = entity.className;
        }
        for(var i=0; i < indexes.length; i++)
        {
          if(class_name.indexOf(indexes[i][0]) >= 0)
          {
            return true;
          }
        }
        
        return false;
      }
      
    /**
      * @public
      * @function
      * @name getIndexFunction
      * @desc comparing two unique indexes.
      * @mamberof Key_Scope
      * @instance
      * @param {Array} index - unique index.
      * @param {Array} collection - Array with indexes - name of class to wich will.
        be added this index.
      * @return {numeral} index of arrays element.
      */
      function getIndexFunction(entity) 
      {
        if(typeof(entity) === "string")
        {
          var class_name = entity;
        }
        else if(typeof(entity) === "object")
        {
          var class_name = entity.className;
        }
        for(var i=0; i < indexes.length; i++)
        {
          if(class_name.indexOf(indexes[i][0]) >= 0)
          {
            return indexes[i][1];
          }
        }
        
        return false;
      }
 		    
      return {
        addIndex: addIndex,
        getCurrentIndex: getCurrentIndex,
        getIndexes: getIndexes,
        isUnique: isUnique,
        getIndexFunction: getIndexFunction
        
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