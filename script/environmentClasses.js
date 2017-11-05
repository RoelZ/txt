// JavaScript Document
 $(document).ready(function(){
	 //set globalID
	 "use strict";
	 var globalID = null;
	 
	function GiveUniqueID(){
		if(globalID === null){
			globalID = 0;
		}else{
			globalID++;
		}
		return globalID;
	}
	

	function StaticItem(name, description){
		//public attributes
		this.name = name;
		this.description = description;
		this.id = GiveUniqueID();

		//operations
		this.getName = function(){
			return this.name;
		};

		this.getDescription = function(){
			return this.description;
		};

		this.getID =function(){
			return this.id;
		};
	}

	function Door(name, description, doorKeyID){
		//public attributes
		//if Door object doesn't have doorKeyID it can't be locked
		if(doorKeyID === undefined){
			this.locked = false;
		}else{
			this.locked = true;
		}

		this.name = name;
		this.description = description;
		this.id = GiveUniqueID();
		this.doorKeyID = doorKeyID;
		
		//
		var itemKeyID = '';
		
		//operations
		this.openDoor = function(){
			if(!this.locked){
				console.log("you enter another room/place");
			}else{
				console.log("This door is locked. You need to find a key.");
			}
		};
		
		this.toggleLock = function(){
			if(itemKeyID ===  doorKeyID){
				this.locked = false;
			}else{
				this.locked = true;
			}
		};

		this.setItemKeyID = function(numberID){
			itemKeyID = numberID || ""; 
		};
		
	}
	
	//Door is child of StaticItem
	Door.prototype = new StaticItem();
	Door.prototype.constructor = Door;
	 
	 
	//test classes with making objects
	var room = new StaticItem("living room", 
							  "It's a well lite room and there are two doors.");
	var outside = new StaticItem("outside", 
								 "It's a forrest and it's raining");
	var doorLivingroomToKitchen = new Door("door from livingroom to kitchen", 
										   "You can go from the livinging room to the kitchen and back", 
										   123);
	var doorLivingroomToHallway = new Door("door from livingroom to hallway", 
										   "You can go from the livinging room to the hallway and back");
		 
	//console.log("description of "+ room.getName() +": \n" + room.getDescription() + "\n Unique ID: " + room.getID());
	//console.log("description of "+ outside.getName() +": \n" + outside.getDescription() + "\n Unique ID: " + outside.getID());
	
	//console.log("description of "+ doorLivingroomToKitchen.getName() +": \n" + doorLivingroomToKitchen.getDescription() + "\n Unique ID: " + doorLivingroomToKitchen.getID());
	// console.log("description of "+ doorLivingroomToHallway.getName() +": \n" + doorLivingroomToHallway.getDescription() + "\n Unique ID: " + doorLivingroomToHallway.getID());
 	
	 //door is set to locked in the creation of the object
	 doorLivingroomToKitchen.openDoor();
	 
	 doorLivingroomToKitchen.setItemKeyID(123);
	 doorLivingroomToKitchen.toggleLock();
	 doorLivingroomToKitchen.openDoor();
	 
	 doorLivingroomToHallway.openDoor();
	 doorLivingroomToHallway.setItemKeyID(143);
	 
 });

