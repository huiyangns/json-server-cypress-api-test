///<reference types="cypress"/>

describe("test post request",() => {
    let latesttile = ""
    it("validate post request code",() => {
        cy.request({
            method:"POST",
            url:"http://localhost:3000/posts",
            body:{
                "title":"want to learn?2",
                "author":"oliver yang"
            }
        }).then(res => {
            expect(res.status).to.eq(201)
        }) 
    }) 

    it("validate the lastest title of post",() => {
        cy.request({
            method:"GET",
            url:"http://localhost:3000/posts",
            headers:{
                accept:"application/json"
            }
        }).then((res) => {
            const body = JSON.parse(JSON.stringify(res.body))
             latesttile = body[body.length-1].title
        }).then(() => {
            expect(latesttile).to.eq("want to learn?2") 
        })
    })
})