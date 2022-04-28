///<reference types="cypress"/>

describe("update existing post data",() => {
    it("update data by using put",() => {
        cy.request({
            method:"PUT",
            url:"http://localhost:3000/posts/2",
            body:{
                "title":"i want to buy sth",
                "author":"tony"
            }
        }).then((res) => {
             expect(res.status).to.eq(200)
        })
    }) 
})