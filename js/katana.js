var katana = {
	extend: function(e,o){
		if(typeof e == "string")
			return document.getElementById(e);

		for(var name in o){
			e[name] = o[name];
		}

		return e;
	},
	obt: function(e){
		if(typeof e == "string"){
			return katana.extend(document.getElementById(e), katana);	
		}else{
			return katana.extend(e, katana);
		}
			

	},
	esc: function(txt){
		return this.innerHTML = txt;
	},
	crear: function(e,opc){
		if(opc != undefined){
			var ele = katana.extend(document.createElement(e), katana);
			for(var i in opc){
				ele.setAttribute(i,opc[i]);
			}		
			//ele.id = id
			return ele;
		}else{
			return katana.extend(document.createElement(e), katana);
		}
	},
	metele: function(e){
		return this.appendChild(e);
	}

}

window.$ = katana;


