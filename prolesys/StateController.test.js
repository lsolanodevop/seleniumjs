import supertest from 'supertest';
import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
const request = supertest("http://localhost:8444");
const key = 'Pr0l3.2022.';
chai.use(chaiHttp);

describe('GET /state', () => {
    it('Send the correct corresponse when the state is found', async () => {
        const sendData = {};

        const expectedResult = {
            "status": 200,
            "data": [
                {
                    "id": 1,
                    "description": "ZULIA",
                    "status": true,
                    "created_at": "2022-07-21T22:33:14.505Z",
                    "updated_at": null,
                    "deleted_at": null,
                    "municipalities": [
                        {
                            "id": 14,
                            "description": "MARA",
                            "state_id": 1,
                            "status": true,
                            "created_at": "2022-07-21T22:39:40.977Z",
                            "updated_at": null,
                            "deleted_at": null,
                            "parishes": [
                                {
                                    "id": 1,
                                    "description": "SAN RAFAEL",
                                    "municipality_id": 14,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 2,
                                    "description": "TAMARE",
                                    "municipality_id": 14,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 6,
                                    "description": "LA SIERRITA",
                                    "municipality_id": 14,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 36,
                                    "description": "LUIS DE VICENTE",
                                    "municipality_id": 14,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 39,
                                    "description": "RICAURTE",
                                    "municipality_id": 14,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 86,
                                    "description": "LAS PARCELAS",
                                    "municipality_id": 14,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 123,
                                    "description": "MARCOS S. GODOY",
                                    "municipality_id": 14,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                }
                            ]
                        },
                        {
                            "id": 18,
                            "description": "LAGUNILLAS",
                            "state_id": 1,
                            "status": true,
                            "created_at": "2022-07-21T22:39:40.977Z",
                            "updated_at": null,
                            "deleted_at": null,
                            "parishes": [
                                {
                                    "id": 3,
                                    "description": "EL DANTO",
                                    "municipality_id": 18,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 11,
                                    "description": "VENEZUELA",
                                    "municipality_id": 18,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 46,
                                    "description": "ELEAZAR LOPEZ C",
                                    "municipality_id": 18,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 83,
                                    "description": "LIBERTAD",
                                    "municipality_id": 18,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 93,
                                    "description": "CAMPO LARA",
                                    "municipality_id": 18,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 112,
                                    "description": "ALONSO DE OJEDA",
                                    "municipality_id": 18,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                }
                            ]
                        },
                        {
                            "id": 15,
                            "description": "SANTA RITA",
                            "state_id": 1,
                            "status": true,
                            "created_at": "2022-07-21T22:39:40.977Z",
                            "updated_at": null,
                            "deleted_at": null,
                            "parishes": [
                                {
                                    "id": 4,
                                    "description": "EL MENE",
                                    "municipality_id": 15,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 7,
                                    "description": "SAN BENITO",
                                    "municipality_id": 15,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 14,
                                    "description": "ALTAGRACIA",
                                    "municipality_id": 15,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 45,
                                    "description": "LUCAS URRIBARRI",
                                    "municipality_id": 15,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 65,
                                    "description": "SANTA RITA",
                                    "municipality_id": 15,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 111,
                                    "description": "JOSE CENOVIO U.",
                                    "municipality_id": 15,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 125,
                                    "description": "PEDRO LUCAS U.",
                                    "municipality_id": 15,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                }
                            ]
                        },
                        {
                            "id": 6,
                            "description": "MACHIQUES DE PERIJA",
                            "state_id": 1,
                            "status": true,
                            "created_at": "2022-07-21T22:39:40.977Z",
                            "updated_at": null,
                            "deleted_at": null,
                            "parishes": [
                                {
                                    "id": 5,
                                    "description": "DOMITILA FLORES",
                                    "municipality_id": 6,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 51,
                                    "description": "SAN JOSE",
                                    "municipality_id": 6,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 58,
                                    "description": "RIO NEGRO",
                                    "municipality_id": 6,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 61,
                                    "description": "OLEGARIO VILLALOBOS",
                                    "municipality_id": 6,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 68,
                                    "description": "SIXTO ZAMBRANO",
                                    "municipality_id": 6,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 82,
                                    "description": "VILLA DEL ROSARIO",
                                    "municipality_id": 6,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 88,
                                    "description": "AMBROSIO",
                                    "municipality_id": 6,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 95,
                                    "description": "BARTOLOME DE CA",
                                    "municipality_id": 6,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 126,
                                    "description": "LIBERTAD",
                                    "municipality_id": 6,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                }
                            ]
                        },
                        {
                            "id": 20,
                            "description": "VILLA DEL ROSARIO",
                            "state_id": 1,
                            "status": true,
                            "created_at": "2022-07-21T22:39:40.977Z",
                            "updated_at": null,
                            "deleted_at": null,
                            "parishes": [
                                {
                                    "id": 8,
                                    "description": "RAUL LEONI",
                                    "municipality_id": 20,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 20,
                                    "description": "VILLA DEL ROSARIO",
                                    "municipality_id": 20,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 30,
                                    "description": "SIXTO ZAMBRANO",
                                    "municipality_id": 20,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 44,
                                    "description": "DONALDO GARCIA",
                                    "municipality_id": 20,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                }
                            ]
                        },
                        {
                            "id": 11,
                            "description": "JESUS E. LOSSADA",
                            "state_id": 1,
                            "status": true,
                            "created_at": "2022-07-21T22:39:40.977Z",
                            "updated_at": null,
                            "deleted_at": null,
                            "parishes": [
                                {
                                    "id": 9,
                                    "description": "MARIANO PARRA",
                                    "municipality_id": 11,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 17,
                                    "description": "SAN JOSE",
                                    "municipality_id": 11,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 27,
                                    "description": "SAN ISIDRO",
                                    "municipality_id": 11,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 43,
                                    "description": "LA CONCEPCION",
                                    "municipality_id": 11,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 70,
                                    "description": "JOSE R. YEPEZ",
                                    "municipality_id": 11,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 129,
                                    "description": "ZULIA",
                                    "municipality_id": 11,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                }
                            ]
                        },
                        {
                            "id": 10,
                            "description": "MIRANDA",
                            "state_id": 1,
                            "status": true,
                            "created_at": "2022-07-21T22:39:40.977Z",
                            "updated_at": null,
                            "deleted_at": null,
                            "parishes": [
                                {
                                    "id": 10,
                                    "description": "SAN JOSE",
                                    "municipality_id": 10,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 37,
                                    "description": "FARIA",
                                    "municipality_id": 10,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 38,
                                    "description": "ANA M. CAMPOS",
                                    "municipality_id": 10,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 40,
                                    "description": "SAN ANTONIO",
                                    "municipality_id": 10,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 49,
                                    "description": "ALTAGRACIA",
                                    "municipality_id": 10,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 101,
                                    "description": "ARISTIDES GALVA",
                                    "municipality_id": 10,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 120,
                                    "description": "LUCAS URRIBARRI",
                                    "municipality_id": 10,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 121,
                                    "description": "JOSE CENOVIO U.",
                                    "municipality_id": 10,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 124,
                                    "description": "SANTA RITA",
                                    "municipality_id": 10,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                }
                            ]
                        },
                        {
                            "id": 3,
                            "description": "CAÑADA DE URDANETA",
                            "state_id": 1,
                            "status": true,
                            "created_at": "2022-07-21T22:39:40.977Z",
                            "updated_at": null,
                            "deleted_at": null,
                            "parishes": [
                                {
                                    "id": 12,
                                    "description": "POTRERITOS",
                                    "municipality_id": 3,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 18,
                                    "description": "CONCEPCION",
                                    "municipality_id": 3,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 53,
                                    "description": "EL CARMELO",
                                    "municipality_id": 3,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 81,
                                    "description": "ANDRES BELLO",
                                    "municipality_id": 3,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 110,
                                    "description": "CHIQUINQUIRA",
                                    "municipality_id": 3,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                }
                            ]
                        },
                        {
                            "id": 7,
                            "description": "PAEZ",
                            "state_id": 1,
                            "status": true,
                            "created_at": "2022-07-21T22:39:40.977Z",
                            "updated_at": null,
                            "deleted_at": null,
                            "parishes": [
                                {
                                    "id": 13,
                                    "description": "ALTA GOAJIRA",
                                    "municipality_id": 7,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 50,
                                    "description": "SINAMAICA",
                                    "municipality_id": 7,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 62,
                                    "description": "GOAJIRA",
                                    "municipality_id": 7,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 117,
                                    "description": "ELIAS SANCHEZ R",
                                    "municipality_id": 7,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                }
                            ]
                        },
                        {
                            "id": 2,
                            "description": "SIMON BOLIVAR",
                            "state_id": 1,
                            "status": true,
                            "created_at": "2022-07-21T22:39:40.977Z",
                            "updated_at": null,
                            "deleted_at": null,
                            "parishes": [
                                {
                                    "id": 15,
                                    "description": "MANUEL MANRRIQ.",
                                    "municipality_id": 2,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 73,
                                    "description": "RAFAEL M BARALT",
                                    "municipality_id": 2,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 107,
                                    "description": "ARISTIDES GALVA",
                                    "municipality_id": 2,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 118,
                                    "description": "RAFAEL URDANETA",
                                    "municipality_id": 2,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                }
                            ]
                        },
                        {
                            "id": 9,
                            "description": "CABIMAS",
                            "state_id": 1,
                            "status": true,
                            "created_at": "2022-07-21T22:39:40.977Z",
                            "updated_at": null,
                            "deleted_at": null,
                            "parishes": [
                                {
                                    "id": 16,
                                    "description": "SAN BENITO",
                                    "municipality_id": 9,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 47,
                                    "description": "JORGE HERNANDEZ",
                                    "municipality_id": 9,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 54,
                                    "description": "ARISTID.CALVANI",
                                    "municipality_id": 9,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 78,
                                    "description": "ROMULO BETANCOURT",
                                    "municipality_id": 9,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 79,
                                    "description": "PUNTA GORDA",
                                    "municipality_id": 9,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 87,
                                    "description": "LA ROSA",
                                    "municipality_id": 9,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 89,
                                    "description": "G. RIOS LINAREZ",
                                    "municipality_id": 9,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 104,
                                    "description": "VILLA DEL ROSARIO",
                                    "municipality_id": 9,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 105,
                                    "description": "AMBROSIO",
                                    "municipality_id": 9,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 114,
                                    "description": "RAFAEL M BARALT",
                                    "municipality_id": 9,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 122,
                                    "description": "RAFAEL URDANETA",
                                    "municipality_id": 9,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 131,
                                    "description": "CARMEN HERRERA",
                                    "municipality_id": 9,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                }
                            ]
                        },
                        {
                            "id": 12,
                            "description": "MARACAIBO",
                            "state_id": 1,
                            "status": true,
                            "created_at": "2022-07-21T22:39:40.977Z",
                            "updated_at": null,
                            "deleted_at": null,
                            "parishes": [
                                {
                                    "id": 19,
                                    "description": "VENANCIO PULGAR",
                                    "municipality_id": 12,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 26,
                                    "description": "SANTA LUCIA",
                                    "municipality_id": 12,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 31,
                                    "description": "JUANA DE AVILA",
                                    "municipality_id": 12,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 34,
                                    "description": "FCO. EUGENIO  BUSTAMANTE",
                                    "municipality_id": 12,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 55,
                                    "description": "RAUL LEONI",
                                    "municipality_id": 12,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 64,
                                    "description": "LUIS HURTADO",
                                    "municipality_id": 12,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 66,
                                    "description": "CARACCIOLO PARRA PEREZ",
                                    "municipality_id": 12,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 69,
                                    "description": "CHIQUINQUIRA",
                                    "municipality_id": 12,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 74,
                                    "description": "BOLIVAR",
                                    "municipality_id": 12,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 75,
                                    "description": "MANUEL DAGNINO",
                                    "municipality_id": 12,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 80,
                                    "description": "OLEGARIO VILLALOBOS",
                                    "municipality_id": 12,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 85,
                                    "description": "ANTONIO BORJAS",
                                    "municipality_id": 12,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 97,
                                    "description": "CRISTO DE ARANZA",
                                    "municipality_id": 12,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 106,
                                    "description": "CACIQUE MARA",
                                    "municipality_id": 12,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 108,
                                    "description": "SAN ISIDRO",
                                    "municipality_id": 12,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 119,
                                    "description": "COQUIVACOA",
                                    "municipality_id": 12,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 127,
                                    "description": "CECILIO ACOSTA",
                                    "municipality_id": 12,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 128,
                                    "description": "IDELFONSO VASQUEZ",
                                    "municipality_id": 12,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                }
                            ]
                        },
                        {
                            "id": 5,
                            "description": "BARALT",
                            "state_id": 1,
                            "status": true,
                            "created_at": "2022-07-21T22:39:40.977Z",
                            "updated_at": null,
                            "deleted_at": null,
                            "parishes": [
                                {
                                    "id": 21,
                                    "description": "GENERAL URDANETA",
                                    "municipality_id": 5,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 24,
                                    "description": "MANUEL G. MATOS",
                                    "municipality_id": 5,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 56,
                                    "description": "MARCELI.BRICENO",
                                    "municipality_id": 5,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 59,
                                    "description": "PUEBLO NUEVO",
                                    "municipality_id": 5,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 60,
                                    "description": "LIBERTADOR",
                                    "municipality_id": 5,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 90,
                                    "description": "SAN TIMOTEO",
                                    "municipality_id": 5,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                }
                            ]
                        },
                        {
                            "id": 4,
                            "description": "SAN FRANCISCO",
                            "state_id": 1,
                            "status": true,
                            "created_at": "2022-07-21T22:39:40.977Z",
                            "updated_at": null,
                            "deleted_at": null,
                            "parishes": [
                                {
                                    "id": 22,
                                    "description": "EL BAJO",
                                    "municipality_id": 4,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 32,
                                    "description": "FRANCISCO OCHOA",
                                    "municipality_id": 4,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 35,
                                    "description": "LUIS HURTADO",
                                    "municipality_id": 4,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 72,
                                    "description": "POTRERITOS",
                                    "municipality_id": 4,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 91,
                                    "description": "SAN FRANCISCO",
                                    "municipality_id": 4,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 92,
                                    "description": "LOS CORTIJOS",
                                    "municipality_id": 4,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 94,
                                    "description": "JESUS ENRIQUE LOSSADA",
                                    "municipality_id": 4,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 130,
                                    "description": "DOMITILA FLORES",
                                    "municipality_id": 4,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 132,
                                    "description": "MARCIAL HERNANDEZ",
                                    "municipality_id": 4,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                }
                            ]
                        },
                        {
                            "id": 16,
                            "description": "VALMORE RODRIGUEZ",
                            "state_id": 1,
                            "status": true,
                            "created_at": "2022-07-21T22:39:40.977Z",
                            "updated_at": null,
                            "deleted_at": null,
                            "parishes": [
                                {
                                    "id": 23,
                                    "description": "RAUL CUENCA",
                                    "municipality_id": 16,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 71,
                                    "description": "MANUEL GUANI.M",
                                    "municipality_id": 16,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 76,
                                    "description": "PUEBLO NUEVO",
                                    "municipality_id": 16,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 77,
                                    "description": "RAFAEL URDANETA",
                                    "municipality_id": 16,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 84,
                                    "description": "LA VICTORIA",
                                    "municipality_id": 16,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                }
                            ]
                        },
                        {
                            "id": 19,
                            "description": "COLON",
                            "state_id": 1,
                            "status": true,
                            "created_at": "2022-07-21T22:39:40.977Z",
                            "updated_at": null,
                            "deleted_at": null,
                            "parishes": [
                                {
                                    "id": 25,
                                    "description": "STA.CRUZ DEL ZULIA",
                                    "municipality_id": 19,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 33,
                                    "description": "SAN CARLOS",
                                    "municipality_id": 19,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 41,
                                    "description": "URRIBARI",
                                    "municipality_id": 19,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 48,
                                    "description": "MORALITO",
                                    "municipality_id": 19,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 63,
                                    "description": "STA BARBARA",
                                    "municipality_id": 19,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 102,
                                    "description": "ENCONTRADOS",
                                    "municipality_id": 19,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 109,
                                    "description": "SIMON RODRIGUEZ",
                                    "municipality_id": 19,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                }
                            ]
                        },
                        {
                            "id": 21,
                            "description": "JESUS M. SEMPRUM",
                            "state_id": 1,
                            "status": true,
                            "created_at": "2022-07-21T22:39:40.977Z",
                            "updated_at": null,
                            "deleted_at": null,
                            "parishes": [
                                {
                                    "id": 28,
                                    "description": "ENCONTRADOS",
                                    "municipality_id": 21,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 52,
                                    "description": "BARI",
                                    "municipality_id": 21,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 98,
                                    "description": "JESUS MARIA SEMPRUM",
                                    "municipality_id": 21,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 100,
                                    "description": "UDON PEREZ",
                                    "municipality_id": 21,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 116,
                                    "description": "MORALITO",
                                    "municipality_id": 21,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                }
                            ]
                        },
                        {
                            "id": 17,
                            "description": "CATATUMBO",
                            "state_id": 1,
                            "status": true,
                            "created_at": "2022-07-21T22:39:40.977Z",
                            "updated_at": null,
                            "deleted_at": null,
                            "parishes": [
                                {
                                    "id": 29,
                                    "description": "UDON PEREZ",
                                    "municipality_id": 17,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 42,
                                    "description": "ENCONTRADOS",
                                    "municipality_id": 17,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 99,
                                    "description": "JESUS MARIA SEMPRUM",
                                    "municipality_id": 17,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                }
                            ]
                        },
                        {
                            "id": 8,
                            "description": "ANDRES BELLO",
                            "state_id": 1,
                            "status": true,
                            "created_at": "2022-07-21T22:39:40.977Z",
                            "updated_at": null,
                            "deleted_at": null,
                            "parishes": [
                                {
                                    "id": 57,
                                    "description": "SANTA ISABEL",
                                    "municipality_id": 8,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                }
                            ]
                        },
                        {
                            "id": 13,
                            "description": "FRANCISCO J. PULGAR",
                            "state_id": 1,
                            "status": true,
                            "created_at": "2022-07-21T22:39:40.977Z",
                            "updated_at": null,
                            "deleted_at": null,
                            "parishes": [
                                {
                                    "id": 67,
                                    "description": "SIMON RODRIGUEZ",
                                    "municipality_id": 13,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 103,
                                    "description": "CARLOS QUEVEDO",
                                    "municipality_id": 13,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 113,
                                    "description": "FRANCISCO JAVIER PULGAR",
                                    "municipality_id": 13,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                }
                            ]
                        },
                        {
                            "id": 1,
                            "description": "PADILLA",
                            "state_id": 1,
                            "status": true,
                            "created_at": "2022-07-21T22:39:40.977Z",
                            "updated_at": null,
                            "deleted_at": null,
                            "parishes": [
                                {
                                    "id": 96,
                                    "description": "MONAGAS",
                                    "municipality_id": 1,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                },
                                {
                                    "id": 115,
                                    "description": "ISLA DE TOAS",
                                    "municipality_id": 1,
                                    "status": true,
                                    "created_at": "2022-07-21T22:46:30.773Z",
                                    "updated_at": null,
                                    "deleted_at": null
                                }
                            ]
                        }
                    ]
                }
            ],
            "message": "Operación exitosa"
        }

        await request.get('/state')
            .query(sendData)
            .set('token', key)
            .expect(200)
            .then((res) => {
                expect(Object.keys(res.body.data)).to.deep.include.members(Object.keys(expectedResult.data));
            });
    });

    it('Send the correct corresponse when the state is not found', async () => {

    });

    it('Send the correct corresponse when we are not sending the data', async () => {

    });
});