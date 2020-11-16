db.accidentes.insertMany([
    {
        tipoVehiculo:"Ilyushin Il-76TD",
        numeroSerie:1043419649,
        operador:"Al Quwwat al-Jawwiya al-Jaza'eriya",
        naturalezaVuelo:"Militar",
        tripulacion:{
            sanos:{
                trabajadores:0,
                pasajeros:0
            },
            heridos:{
                trabajadores:0,
                pasajeros:0
            },
            muertos:{
                trabajadores:10,
                pasajeros:247
            }
        },
        faseAccidente:"Despegue",
        alturaAccidente:[0,100],
        lugarAccidente: {
                type:"Point",
                coordinates:[2.9134368896484375,36.574870341113865]
        },
        paisesImplicados:["Argelia"],
        dañosVehiculo: {
            reparable:false,
            detalles:["Envuelto en llamas","Explosion"]
        },
        aeropuertoSalida:{
            nombre:"Boufarik Airport",
            hora: new Date ("2018-04-11T08:00:00Z"),
        },
        aeropuertoLlegada:{
            nombre:"Boufarik Airport",
            hora: new Date ("2018-04-11T08:02:00Z"),
        }
    },
    {
        tipoVehiculo:"Boeing 737-201",
        numeroSerie:21816592,
        operador:"Cubana de Aviacion",
        naturalezaVuelo:"Vuelo Domestico",
        tripulacion:{
            sanos:{
                trabajadores:0,
                pasajeros:0
            },
            heridos:{
                trabajadores:0,
                pasajeros:1
            },
            muertos:{
                trabajadores:6,
                pasajeros:106
            }
        },
        faseAccidente:"Despegue",
        alturaAccidente:[900,1000],
        lugarAccidente:{
                type:"Point",
                coordinates:[-82.36381530761717,23.118259118821576]
        },
        paisesImplicados:["Cuba"],
        dañosVehiculo:{
            reparable:false,
            detalles:["Perdida Ala","Explosion Trasera"]
        },
        aeropuertoSalida:{
            nombre:"Havana-José Martí International Airport",
            hora: new Date ("2018-05-18T12:10:00")
        },
        aeropuertoLlegada:{
            nombre:"Holguín-Frank Pais Airport",
            hora: new Date ("2018-05-18T12:16:00")
        }
    },
    {
        tipoVehiculo:"Boeing 737-2H4",
        numeroSerie:21447508,
        operador:"Air Philippines",
        naturalezaVuelo:"Vuelo Domestico",
        tripulacion:{
            sanos:{
                trabajadores:0,
                pasajeros:0
            },
            heridos:{
                trabajadores:0,
                pasajeros:0
            },
            muertos:{
                trabajadores:7,
                pasajeros:124
            }
        },
        faseAccidente:"En Ruta",
        alturaAccidente:[100,200],
        lugarAccidente:{
                type:"Point",
                coordinates:[122.54482984542845,10.703412193691939]
        },
        paisesImplicados:["Filipinas"],
        dañosVehiculo:{
            reparable:false,
            detalles:["Aterrizaje forzoso contra cocotera","Falta de combustible"]
        },
        aeropuertoSalida:{
            nombre:"Manila-Ninoy Aquino International Airport",
            hora: new Date ("2000-04-19T07:00:00")
        },
        aeropuertoLlegada:{
            nombre:"Davao City-Francisco Bangoy International Airport",
            hora: new Date ("2000-04-19T07:45:00")
        }
    },
    {
        tipoVehiculo:"Swearingen SA226-AT Merlin IVA",
        numeroSerie:9812351062,
        operador:"Flightline",
        naturalezaVuelo:"Militar",
        tripulacion:{
            sanos:{
                trabajadores:2,
                pasajeros:0
            },
            heridos:{
                trabajadores:0,
                pasajeros:0
            },
            muertos:{
                trabajadores:0,
                pasajeros:0
            }
        },
        faseAccidente:"Aterrizaje",
        alturaAccidente:[0,20],
        lugarAccidente:{
                type:"Point",
                coordinates:[2.8188514709472656,41.9791452351301]
        },
        paisesImplicados:["España"],
        dañosVehiculo:{
            reparable:true,
            detalles:["No se desplego el tren de aterrizaje"]
        },
        aeropuertoSalida:{
            nombre:"Gerona-Costa Brava Airport",
            hora: new Date ("2016-04-24T14:30:00")
        },
        aeropuertoLlegada:{
            nombre:"Gerona-Costa Brava Airport",
            hora: new Date ("2016-04-24T15:20:00")
        }
    },
    {
        tipoVehiculo:"Swearingen SA226-AT Merlin IVA",
        numeroSerie:9812351043,
        operador:"Flightline",
        naturalezaVuelo:"Vuelo Internacional No Programado",
        tripulacion:{
            sanos:{
                trabajadores:0,
                pasajeros:0
            },
            heridos:{
                trabajadores:0,
                pasajeros:0
            },
            muertos:{
                trabajadores:2,
                pasajeros:8
            }
        },
        faseAccidente:"En Ruta",
        alturaAccidente:[500,700],
        lugarAccidente:{
                type:"Point",
                coordinates:[-4.6142578125,35.137879119634185]
        },
        paisesImplicados:["España","Marruecos"],
        dañosVehiculo:{
            reparable:false,
            detalles:["Fallo del Sistema"]
        },
        aeropuertoSalida:{
            nombre:"Barcelona-El Prat Airport",
            hora: new Date ("2001-10-10T10:11:00")
        },
        aeropuertoLlegada:{
            nombre:"Oran-es Senia Airport",
            hora: new Date ("2001-10-10T10:58:00")
        }
    },
    {
        tipoVehiculo:"Cessna 208B Grand Caravan",
        numeroSerie:2082227,
        operador:"Two Táxi Aéreo",
        naturalezaVuelo:"Vuelo Domestico No Programado",
        tripulacion:{
            sanos:{
                trabajadores:0,
                pasajeros:2
            },
            heridos:{
                trabajadores:2,
                pasajeros:1
            },
            muertos:{
                trabajadores:0,
                pasajeros:0
            }
        },
        faseAccidente:"Despegue",
        alturaAccidente:[0,100],
        lugarAccidente:{
                type:"Point",
                coordinates:[-45.9228515625,-12.897489183755892]
        },
        paisesImplicados:"Brasil",
        dañosVehiculo:{
            reparable:true,
            detalles:["Deformacion de ala","Calor de motor"]
        },
        aeropuertoSalida:{
            nombre:"Macapá Internacional Airport",
            hora: new Date ("2016-04-04T06:50:00")
        },
        aeropuertoLlegada:{
            nombre:"Monte Dourado Airport",
            hora: new Date ("2016-04-04T07:14:00")
        }
    },
    {
        tipoVehiculo:"Cessna 208B Grand Caravan",
        numeroSerie:20800055,
        operador:"Liberian Army Air Reconnaissance Unit",
        naturalezaVuelo:"Militar",
        tripulacion:{
            sanos:{
                trabajadores:0,
                pasajeros:0
            },
            heridos:{
                trabajadores:2,
                pasajeros:0
            },
            muertos:{
                trabajadores:4,
                pasajeros:10
            }
        },
        faseAccidente:"En Ruta",
        alturaAccidente:[1000,1200],
        lugarAccidente:{
                type:"Point",
                coordinates:[-9.283447265625,6.287998672327671]
        },
        paisesImplicados:["Liberia"],
        dañosVehiculo:{
            reparable:false,
            detalles:["Explosion Motor","Choque contra el agua"]
        },
        aeropuertoSalida:{
            nombre:"Monrovia-Roberts International Airport",
            hora: new Date ("1987-01-30T20:00:00")
        },
        aeropuertoLlegada:{
            nombre:"Cape Palmas-A. Tubman Airport",
            hora: new Date ("1987-01-31T03:33:00")
        }
    },
    {
        tipoVehiculo:"Lockheed C-130 Hercules",
        numeroSerie:4777,
        operador:"Força Aérea Portuguesa",
        naturalezaVuelo:"Militar",
        tripulacion:{
            sanos:{
                trabajadores:1,
                pasajeros:0
            },
            heridos:{
                trabajadores:3,
                pasajeros:0
            },
            muertos:{
                trabajadores:3,
                pasajeros:0
            }
        },
        faseAccidente:"Despegue",
        alturaAccidente:[1000,1500],
        lugarAccidente:{
                type:"Point",
                coordinates:[-8.963470458984375,38.7080176975273]
            },
        paisesImplicados:["Portugal","España"],
        dañosVehiculo:{
            reparable:false,
            detalles:["Maniaobra forzosa","Choque contra montaña"]
        },
        aeropuertoSalida:{
            nombre:"Montijo Air Base ",
            hora: new Date ("2016-07-11T12:00:00")
        },
        aeropuertoLlegada:{
            nombre:"Montijo Air Base ",
            hora: new Date ("2016-07-11T13:20:00")
        }
    },
    {
        tipoVehiculo:"Lockheed C-130 Hercules",
        numeroSerie:4624,
        operador:"Nigerian Air Force - NAF",
        naturalezaVuelo:"Militar",
        tripulacion:{
            sanos:{
                trabajadores:0,
                pasajeros:0
            },
            heridos:{
                trabajadores:0,
                pasajeros:0
            },
            muertos:{
                trabajadores:8,
                pasajeros:151
            }
        },
        faseAccidente:"En ruta",
        alturaAccidente:[100,300],
        lugarAccidente:{
                type:"Point",
                coordinates:[8.3935546875,9.503243879785232]
        },
        paisesImplicados:["Nigeria"],
        dañosVehiculo:{
            reparable:false,
            detalles:["Fallo Motor","Fallo en el Sistema"]
        },
        aeropuertoSalida:{
            nombre:"Lagos-Murtala Muhammed International Airport",
            hora: new Date ("1992-09-26T17:00:00")
        },
        aeropuertoLlegada:{
            nombre:"Kaduna Airport",
            hora: new Date ("1992-09-26T17:30:00")
        }
    }
])