	///////////////////////////////////
	/*         OBSERVABLE            */
	///////////////////////////////////

/**
  * @name Observable
  * @class
  * @classdesc Standart subject for obsrver. 
  * @namespace Observable
  * @constructs 
  * @example this.subscribe({some observer});
  */

  var Observable = function()
  {

    this.subscribers = new Array();

  /**
    * @public
    * @function
    * @name subscribe
    * @desc Need for subscribing observers.
    * @mamberof Observable
    * @instance
    * @param {Object} observer - Object wich containe observer instans.
    */
    this.subscribe = function(observer)
    {
      this.subscribers.push(observer);
    }

  /**
    * @public
    * @function
    * @name unsubscribe
    * @desc Need for unsubscribing observers.
    * @mamberof Observable
    * @instance
    * @param {Object} observer - Object wich containe observer instans.
    */
    this.unsubscribe = function(observer)
    {
      for (var i = 0; i < this.subscribers.length; i++) 
      {
        if (this.subscribers[i] === observer) 
        {
          this.subscribers[i].splice(i, 1);
          return;
        };
      };
    }

  /**
    * @public
    * @function
    * @name publish
    * @desc Calling observers constructors.
    * @mamberof Observable
    * @instance
    * @param {Object} data - Some objects collection to do some actions with.
    * @param {int} counter - Index of sub object in data collection.
    */
    this.publish = function(data, scope, symbol, index, event, condition)
    {
      for (var i = 0; i < this.subscribers.length; i++) {
        this.subscribers[i](data, scope, symbol, index, event, condition);
      };
    }

  }