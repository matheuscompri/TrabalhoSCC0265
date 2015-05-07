var api = angular.module("lugaresApi", []);

api.factory("lugaresApi", function () {

    var usuarios = [
        {
            "nome": "Paulo",
            "data_nascimento": "01/01/1993",
            "estado": "SP",
            "cidade": "São Carlos",
            "telefone": "(19) 9999-8888",
            "email": "paulo@email.com",
            "senha": "senha123"
        },
        {
            "nome": "Matheus",
            "data_nascimento": "01/01/1992",
            "estado": "SP",
            "cidade": "São Carlos",
            "telefone": "(19) 9999-7777",
            "email": "matheus@email.com",
            "senha": "senha123"
        }
 ];

    var categorias = [
        {
            "nome": "América",
            "id": "america"
   },
        {
            "nome": "Ásia",
            "id": "asia"
   },
        {
            "nome": "Europa",
            "id": "europa"
   }
 ];

    var lugares = [

        {
            "nome": "Vale do Silicio",
            "autor": "Paulo",
            "descricao": "Ótimo lugar para os fãs de tecnologia. Os passeios incluem visitas a gigantes da tecnologia como Apple, Google, Twitter, Facebook e muito mais.",
            "imagens": ["media/lugares/1.jpg"],
            "categorias": ["america"],
            "componentes": [],
            "data": new Date(2010, 12, 10),
            "comentarios": [{
                usuario: "paulo@email.com",
                nome: "Paulo",
                comentario: "Muito interessante"
            }],
            "ranking": 0,
            "numeroVotos": 0,
            "id": 1
  },

        {
            "nome": "Nova York",
            "autor": "Matheus",
            "descricao": "Cidade com ótimos roteiros gastronômicos.",
            "imagens": ["media/lugares/2.jpg"],
            "categorias": ["america"],
            "componentes": [],
            "comentarios": [],
            "data": new Date(),
            "ranking": 0,
            "numeroVotos": 0,
            "id": 2
  },

        {
            "nome": "Machu Picchu",
            "autor": "Paulo",
            "descricao": "Cidadela da civilização Inca localizada no topo da cordilheira dos Andes.",
            "imagens": ["media/lugares/3.jpg"],
            "categorias": ["america"],
            "componentes": [],
            "comentarios": [],
            "data": new Date(),
            "ranking": 0,
            "numeroVotos": 0,
            "id": 3
  },

        {
            "nome": "Rio de Janeiro",
            "autor": "Matheus",
            "descricao": "Cidade maravilhosa, com diversas e belissimas praias paradisiacas. Possui atrações como o Cristo Redentor (considerado uma das maravilhas modernas atuais) e o Pão de Açucar.",
            "imagens": ["media/lugares/4.jpg"],
            "categorias": ["america"],
            "componentes": [],
            "comentarios": [],
            "data": new Date(),
            "ranking": 0,
            "numeroVotos": 0,
            "id": 4
  },


        {
            "nome": "Muralha da China",
            "autor": "Paulo",
            "descricao": "Grande muralha construída durante o império chinês, considerada uma das maravilhas modernas atuais.",
            "imagens": ["media/lugares/5.jpg"],
            "categorias": ["asia"],
            "componentes": [],
            "comentarios": [],
            "data": new Date(),
            "ranking": 0,
            "numeroVotos": 0,
            "id": 5
  },

        {
            "nome": "Tokyo",
            "autor": "Matheus",
            "descricao": "Cidade para os fãs da cultura nipônica.",
            "imagens": ["media/lugares/6.jpg"],
            "categorias": ["asia"],
            "componentes": [],
            "comentarios": [],
            "data": new Date(),
            "ranking": 0,
            "numeroVotos": 0,
            "id": 6
  },

        {
            "nome": "Seoul",
            "autor": "Paulo",
            "descricao": "Capital da Coréia do Sul.",
            "imagens": ["media/lugares/7.jpg"],
            "categorias": ["asia"],
            "componentes": [],
            "comentarios": [],
            "data": new Date(),
            "ranking": 0,
            "numeroVotos": 0,
            "id": 7
  },

        {
            "nome": "Hong Kong",
            "autor": "Matheus",
            "descricao": "Ótima cidade turística.",
            "imagens": ["media/lugares/8.jpg"],
            "categorias": ["asia"],
            "componentes": [],
            "comentarios": [],
            "data": new Date(),
            "ranking": 0,
            "numeroVotos": 0,
            "id": 8
  },




        {
            "nome": "Stonehenge",
            "autor": "Paulo",
            "descricao": "Monumento pré-histórico com propósito desconhecido.",
            "imagens": ["media/lugares/9.jpg"],
            "categorias": ["europa"],
            "componentes": [],
            "comentarios": [],
            "data": new Date(),
            "ranking": 0,
            "numeroVotos": 0,
            "id": 9
  },

        {
            "nome": "Castelo de Versailles",
            "autor": "Matheus",
            "descricao": "Castelo francês que atualmente foi transformado em um museu. Conta com diversos itens da época, tais como objetos da realeza, itens históricos e o ambiente do castelo que permanece inalterado.",
            "imagens": ["media/lugares/10.jpg"],
            "categorias": ["europa"],
            "componentes": [],
            "comentarios": [],
            "data": new Date(),
            "ranking": 0,
            "numeroVotos": 0,
            "id": 10
  },

        {
            "nome": "Coliseu",
            "autor": "Paulo",
            "descricao": "Anfiteatro da época do império romando, utilizado na época para as batalhas dos gladiadores.",
            "imagens": ["media/lugares/11.jpg"],
            "categorias": ["europa"],
            "componentes": [],
            "comentarios": [],
            "data": new Date(),
            "ranking": 0,
            "numeroVotos": 0,
            "id": 11
  },

        {
            "nome": "Partenon",
            "autor": "Matheus",
            "descricao": "Templo dedicado a deusa grega Atena.",
            "imagens": ["media/lugares/12.jpg"],
            "categorias": ["europa"],
            "componentes": [],
            "comentarios": [],
            "data": new Date(),
            "ranking": 0,
            "numeroVotos": 0,
            "id": 12
  }

 ];

    return {
        listarCategorias: function () {
            return categorias;

        },
        listarLugares: function (categoria) {
            //Filtra lugares de acordo com a categoria
            var lugares_filtrados = lugares.filter(function (lugar) {
                return lugar.categorias.some(function (cat) {
                    return cat === categoria;
                });
            });

            return lugares_filtrados;

        },
        listaTodosLugares: function () {
            return lugares;
        },
        listarLugar: function (lugarId) {
            //Filtra lugares de acordo com a categoria
            var lugares_filtrados = lugares.filter(function (lugar) {
                return parseInt(lugar.id) === parseInt(lugarId);
            });
            if (lugares_filtrados.length)
                return lugares_filtrados[0];
            else
                return {};
        },

        listarCategoria: function (catId) {
            //Filtra lugares de acordo com o id da categoria
            var categorias_filtradas = categorias.filter(function (categoria) {
                return categoria.id === catId;
            });

            return categorias_filtradas;

        },

        listShotComments: function (shotId) {
            var n_url = url + "/shots/" + shotId + "/comments?callback=JSON_CALLBACK";
            return $http.jsonp(n_url).then(function (response) {
                return response.data.comments;
            });
        },

        adicionarComentario: function (username, comentario, lugarId) {

            var usuario = usuarios.filter(function (usuario) {
                return usuario.email === username;
            });

            var lugar = lugares.filter(function (lugar) {
                return parseInt(lugar.id) === parseInt(lugarId);
            });

            var novoComentario = {
                "nome": usuario[0].nome,
                "email": usuario[0].email,
                "comentario": comentario
            };



            if (lugar.length > 0)
                lugar[0].comentarios.push(novoComentario);
        },

        calcularAvaliacao: function (voto, lugarId) {
            var lugar_avaliado = lugares.filter(function (lugar) {
                return parseInt(lugar.id) === parseInt(lugarId);
            });
            if (lugar_avaliado.length > 0) {

                lugar_avaliado[0].numeroVotos = parseInt(lugar_avaliado[0].numeroVotos) + 1;

                console.log("numVotos:" + lugar_avaliado[0].numeroVotos);
                console.log("ranking: " + lugar_avaliado[0].ranking);
                console.log("voto: " + voto);

                lugar_avaliado[0].ranking = ((parseInt(lugar_avaliado[0].numeroVotos) - 1)*parseFloat(lugar_avaliado[0].ranking) + parseInt(voto)) / (lugar_avaliado[0].numeroVotos);
                console.log("avaliacao: " + lugar_avaliado[0].ranking);

            }
        },
        
        emailJaExiste: function(email){

			var u = usuarios.filter(function(u){
				return u.email.toLowerCase() === email.toLowerCase();
			});

			if (u.length > 0){
				return true;
			}else{
				return false;
			}

		},

        login: function (usuario, senha) {

            var u = usuarios.filter(function (u) {
                return u.senha === senha && u.email.toLowerCase() === usuario.toLowerCase();
            });

            if (u.length > 0) {
                return u[0];
            } else {
                return false;
            }
        },

        novoUsuario: function (nome, data_nasc, estado, cidade, telefone, email, senha) {

            var u = {
                "nome": nome,
                "data_nascimento": data_nasc,
                "estado": estado,
                "cidade": cidade,
                "telefone": telefone,
                "email": email,
                "senha": senha
            };

            usuarios.push(u);

        },
    }
});