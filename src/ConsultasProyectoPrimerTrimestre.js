// Que sea un vuelo militar y almenos haya algun muerto en el vuelo
db.accidentes.find(
    {
        naturalezaVuelo:"Militar",
        $or:[
        {"tripulacion.muertos.trabajadores":{$gte:1}},
        {"tripulacion.muertos.pasajeros":{$gte:1}}
        ]},
    {
        _id:0,
        tipoVehiculo:1,
        numeroSerie:1,
        faseAccidente:1
    }
).pretty()

// Que el avion sea un modelo Boeing y que los daños del avion sean irreparables y el accidente se
// ha producido antes de 2 horas del despegue
db.accidentes.find(
    {
	$and: {
        {tipoVehiculo:/Boeing/},
        {"dañosVehiculo.reparable":false}
	},
        $where:"this.aeropuertoSalida.hora-this.aeropuertoLlegada.hora<72000000",
    },
    {
        _id:0,
        paisesImplicados:1,
        "aeropuertoSalida.nombre":1,
        "aeropuertoLlegada.nombre":1,
    }
).pretty()



// Cuantos casos hay en los que los paises implicados sean España o Filipinas y que haya ocurrido el accidente en Africa
db.accidentes.find(
    {
        paisesImplicados:{ 
            $in: ["España","Filipinas"]
        },
        lugarAccidente: {
            $geoWithin: {
                $geometry:{
                 type:"Polygon",
                 coordinates:[
                    [
                    [
                      -25.3125,
                      41.50857729743935
                    ],
                    [
                      -28.828124999999996,
                      -52.908902047770255
                    ],
                    [
                      61.87499999999999,
                      -52.482780222078205
                    ],
                    [
                      60.46875,
                      39.36827914916011
                    ],
                    [
                      -25.3125,
                      41.50857729743935
                    ]
                  ]
                ]
               }}
         }
    }
).count()



//Cuatos accidentes hay si no hay ningun muerto en el accidente y que el vuelo no sea
//de naturaleza militar o vuelo domestico
db.accidentes.find(
    {
        $nor:[
        {"tripulacion.muertos.trabajadores":{$gte:1}},
        {"tripulacion.muertos.pasajeros":{$gte:1}}
        ]
	$or:[
	{naturalezaVuelo:{$ne:"Militar"}},
	{naturalezaVuelo:{$ne:"Vuelo Domestico"}}
	]
    },
    }
).count

// Encuentra donde la produccion total es mayor que el numero de accidentes, 
// si el pais de Fabricacion no es Rusia y la fecha sea menor de 1950
db.aviones.find(
	{
		$where:"produccion.produccionTotal>detallesAccidentes.numeroAccidentes",
		paisFabricaccion:{$ne:"Rusia"},
    		primerVuelo:{$lt:new Date("1950-01-01")}
	},
	{
	   _id:0,
	   paisFabricaccion:1,
	   primerVuelo:1,		
	}
    )


// No se sigan fabricando y que se hayan producido mas de 50 accidentes y que tambien su porcentaje de supervivencia 
// Sea menor que el 20%
db.aviones.find(
    {
        "produccion.activo":false,
        $and:{
            "detallesAccidentes.numeroAccidentes":{$gte:50},
            "detallesAccidentes.porcentajeSupervivencia":{$lt:20}
        }
    },
).pretty

// El numero de accidentes no sea mayor a 60 y el porcentaje de Supervivencia
// Sea mayor al 10 %
db.aviones.find(
    {
	"detallesAccidentes.numeroAccidentes":{$lt:60},
	"detallesAccidentes.porcentajeSupervivencia:10.4"
    },
    {
	_id:0,
	"detallesAccidentes.peorAccidente":1,
	tipoAvioneta:1,
    }
).pretty

