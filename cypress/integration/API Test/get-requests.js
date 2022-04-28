///<reference types="cypress"/>

describe("test get request",() => {
    it("test get request code",() => {
        let result = cy.request("http://localhost:3000/posts") 
        result.its("status").should("eq", 200)
    }) 

    it("validate certain property has right value",() => {
        cy.request({
            method:"GET",
            url:"http://localhost:3000/posts",
            headers:{
                accept:"application/json"
            }
        })
            .then(res => {
                const body = JSON.parse(JSON.stringify(res.body))
                expect(body[0]).has.property("title", "json-server")
                expect(body[1]).has.property("author", "oliver")

                body.forEach(element => {
                    expect(element).to.have.all.keys("id","title","author")
                });
            }) 
    })
})