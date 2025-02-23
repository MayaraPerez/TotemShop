# TotemShop
Este projeto está sendo desenvolvido com o objetivo de praticar e se aprofundar nos conhecimento em React. 

A proposta é criar uma aplicação funcional, semelhante aos totens de autoatendimento, onde o usuário pode selecionar produtos, adicionar ao carrinho e finalizar a compra. Mais do que entregar um produto final, o foco está no aprendizado das boas práticas, componentização, gerenciamento de estado e integração com APIs."


- PostrGress (banco de dado relacional)
- quais dados eu vou salvar 
- como eu vou estruturar esses dados no banco

entidade:   restaurante                             id
                                                    name 
                                                    slug
                                                    description
                                                    avatarImgUrl
                                                    coverImageUrl
                                                    creatdAt
                                                    updatedAt                        

categorias: terá varios produtos um restaurante pode ter varias categorias mais uma categoria só estara vinculada a um restaurante
                                                    id
                                                    restaurantID
                                                    name
                                                    createdAt
                                                    updatedAt

produtos:   esta dentro das categorias              id
                                                    name
                                                    description
                                                    price
                                                    imageUrl
                                                    igredientes
                                                    restauranteID
                                                    menuCategoryID
                                                    createdAt
                                                    updatedAt

pedidos:   relacao com restaurante e os produtos -  id
                                                    total
                                                    status
                                                    metodo de consumo
                                                    createdAt
                                                    updatedAt

produto-pedido: faz a relacao produto e pedido -    id
                                                    produtoId
                                                    quantity
                                                    price
                                                    createdAt
                                                    updateAt
                                                    orderId

     