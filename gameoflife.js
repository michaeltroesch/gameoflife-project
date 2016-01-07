var generateWorld = function(n){
	var world = [];

	for(var i=0; i<n; i++){
		world[i] = [];

		for(var j=0; j<n; j++){
			world[i].push(Math.floor(Math.random() * 2));
		}
	}

	return world;
}

var countNeighbors = function(world, col, row){
	var count = 0;

	if(col == 0 && row == 0){
		if(world[col+1][row])
			count++;
		if(world[col+1][row+1])
			count++;
		if(world[col][row+1])
			count++

		return count;
	}

	if(col == world.length-1 && row == world.length-1){
		if(world[col-1][row])
			count++;
		if(world[col-1][row-1])
			count++;
		if(world[col][row-1])
			count++;

		return count;
	}

	if(col == 0 && row == world.length-1){
		if(world[col+1][row])
			count++;
		if(world[col+1][row-1])
			count++;
		if(world[col][row-1])
			count++;

		return count;
	}

	if(col == world.length-1 && row == 0){
		if(world[col-1][row])
			count++;
		if(world[col-1][row+1])
			count++;
		if(world[col][row+1])
			count++;

		return count;
	}

	if(col == 0){
		if(world[col+1][row])
			count++;
		if(world[col+1][row-1])
			count++;
		if(world[col][row-1])
			count++;
		if(world[col+1][row+1])
			count++;
		if(world[col][row+1])
			count++;

		return count;
	}

	if(col == world.length-1){
		if(world[col-1][row])
			count++;
		if(world[col-1][row-1])
			count++;
		if(world[col][row-1])
			count++;
		if(world[col-1][row+1])
			count++;
		if(world[col][row+1])
			count++;

		return count;
	}

	if(row == 0){
		if(world[col+1][row])
			count++;
		if(world[col-1][row])
			count++;
		if(world[col][row+1])
			count++;
		if(world[col+1][row+1])
			count++;
		if(world[col-1][row+1])
			count++;

		return count;
	}

	if(row == world.length-1){
		if(world[col+1][row])
			count++;
		if(world[col-1][row])
			count++;
		if(world[col][row-1])
			count++;
		if(world[col+1][row-1])
			count++;
		if(world[col-1][row-1])
			count++;

		return count;
	}

	if(world[col+1][row+1])
		count++;
	if(world[col][row+1])
		count++;
	if(world[col][row-1])
		count++;
	if(world[col+1][row-1])
		count++;
	if(world[col-1][row+1])
		count++;
	if(world[col-1][row-1])
		count++;
	if(world[col-1][row])
		count++;
	if(world[col+1][row])
		count++;

	return count;
}

var worldToString = function(world){
	var worldstring = "";
  
	for(var j=0; j<world.length; j++){
  	for(var i=0; i<world.length; i++){
    	if(world[i][j]){
      	worldstring += "o ";
      }else{
      	worldstring += "x ";
      }
    }
    worldstring += "\n";
  }
  
  return worldstring;
}

var nextStep = function(world){
	var newWorld = world;
  
  for(var i=0; i<world.length; i++){
  	for(var j=0; j<world.length; j++){
    	if(countNeighbors(world, i, j) == 0 || 
    	   countNeighbors(world, i, j) == 1 ||
    	   countNeighbors
    	   (world, i, j) == 4){
         		newWorld[i][j] = 0;
         }
			if(countNeighbors(world, i, j) == 3){
      			newWorld[i][j] = 1;
      }
    }
  }

	return newWorld;
}