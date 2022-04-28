///<reference types="cypress"/>

describe("Get, Post, Delete comment via api",() => {
    let body = Math.random().toString(36).substring(1) + Math.random().toString(36).substring(1)
    let postId = Math.round(Math.random() * 1000) + 1
    let length = 0
    it("Post a new comment",() => {
         cy.request({
             method:"POST",
             url:"http://localhost:3000/comments",
             body:{
                body,
                postId
             }
         }).then((response) => {
            const resBody = JSON.parse(JSON.stringify(response.body))
            expect(response.status).to.eq(201)
         })
    }) 

    it("Get the latest comment and verify its body",() => {
         cy.request({
             method:"GET",
             url:"http://localhost:3000/comments",
             headers:{
                accept:"application/json"
             }
         }).then(response => {
            expect(response.status).to.eq(200)
             const resBody = JSON.parse(JSON.stringify(response.body))
             length = resBody.length
             expect(resBody[resBody.length - 1].body).to.eq(body)
         })
    }) 

    it("Delete the lastest comment",() => {
         cy.request({
             method:"DELETE",
             url:"http://localhost:3000/comments/" + (length)
         }).then((response) => {
            expect(response.status).to.eq(200)
         })
    }) 
})