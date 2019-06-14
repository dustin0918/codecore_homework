class Turtle{
    constructor(_x,_y){
        this.x=_y;
        this.y=_x;
        this.direction='right'
        this.path=new Array();
        for (let x =0;x<6;x++){
            this.path[x]=new Array();
            for (let y=0;y<6;y++){
              this.path[x][y]=0;
            }
        }
		this.path[_y][_x]=1;
		this.max_x = _y;
		this.max_y = _x;
    }
      
    right(){
		  if(this.direction == 'right'){
			  this.direction = 'down';
		    }else if(this.direction == 'left'){
			    this.direction = 'up';
		    }else if(this.direction == 'up'){
			    this.direction = 'right';
		    }else if(this.direction == 'down'){
			    this.direction = 'left';
		    }	
	    }
	
	left(){
		  if(this.direction == 'right'){
			  this.direction = 'up';
		    }else if(this.direction == 'left'){
			    this.direction = 'down';
		    }else if(this.direction == 'up'){
			    this.direction = 'left';
		    }else if(this.direction == 'down'){
			    this.direction = 'right';
		    }	
	    }
	
	
	pathChange(){
		if(this.direction == 'right'){
			for(let i = 0;i<6;i++){
				if(this.path[i][0] == 1){
					return false;
				}else{
					
				}
			}
			for(let x = 0;x<5;x++){
				for(let y = 0;y<6;y++){
					this.path[y][x] = this.path[y][x+1];
				}
			}
			for(let j = 0;j<6;j++){
				this.path[j][5] = 0;
			}
		}else if(this.direction == 'left'){
			for(let i = 0;i<6;i++){
				if(this.path[i][5] == 1){
					return false;
				}else{
					
				}
			}
			for(let x = 5;x>0;x--){
				for(let y = 0;y<6;y++){
					this.path[y][x] = this.path[y][x-1];
				}
			}
			for(let j = 0;j<6;j++){
				this.path[j][0] = 0;
			}
		}else if(this.direction == 'up'){
			for(let i = 0;i<6;i++){
				if(this.path[5][i] == 1){
					return false;
				}else{
					
				}
			}
			for(let x = 5;x>0;x--){
				for(let y = 0;y<6;y++){
					this.path[x][y] = this.path[x-1][y];
				}
			}
			for(let j = 0;j<6;j++){
				this.path[0][j] = 0;
			}
		}else if(this.direction == 'down'){
			for(let i = 0;i<6;i++){
				if(this.path[0][i] == 1){
					return false;
				}else{
					
				}
			}
			for(let x = 0;x<5;x++){
				for(let y = 0;y<6;y++){
					this.path[x][y] = this.path[x+1][y];
				}
			}
			for(let j = 0;j<6;j++){
				this.path[5][j] = 0;
			}
		}
		return true;
	}
	
    forward(step){
      for(let i = 0;i<step;i++){
			  if(this.direction == 'right'){
				  if(this.y<5){ 
					  this.y += 1;
					  this.path[this.x][this.y] = 1;
				  }else{
					  if(this.pathChange()){
					  	  this.path[this.x][this.y] = 1;
					  }
				  }
			  }else if(this.direction == 'left'){
				  if(this.y>0){
					  this.y -= 1;
					  this.path[this.x][this.y] = 1;
				  }else{
					  if(this.pathChange()){
					     this.path[this.x][this.y] = 1;
					  }
				  }
			  }else if(this.direction == 'up'){
				  if(this.x>0){
					  this.x -= 1;
					  this.path[this.x][this.y] = 1;
				  }else{
					  if(this.pathChange()){
					      this.path[this.x][this.y] = 1;
					  }
				  }
			  }else if(this.direction == 'down'){
				  if(this.x<5){
				  	this.x += 1;
					this.path[this.x][this.y] = 1;
				  }else{
					  if(this.pathChange()){
					      this.path[this.x][this.y] = 1;
					  }
				  }
			  }
		  }
    } 
	
	
	
	
	
	
    print() {
		let print_str = '';
		for(let x=0;x<6;x++){   
      		for(let y=0;y<6;y++){
           		if(this.path[x][y] == 0){
					print_str = print_str + ' ';
				}else{
					print_str = print_str + '●';
				}
      		}
			print_str = print_str + '\n';
		}
		console.log(print_str);	
	}
}
let a =new Turtle(0,0);
a.forward(3);
a.left();
a.forward(3);
a.print();