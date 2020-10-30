const {getRepos, fetch} = require('../Jest.Async/ex3async')

describe("Check if repository doesn't exist", () => {
    it('Check if meme generator exist', async (done) => {
        const data = await getRepos('https://api.github.com/users/tryber/repos')
       expect(data.some((element) => element === 'sd-01-week4-5-project-todo-list')).toBeFalsy()
       done()
    })
    it("Check if to do list doesnt't exist", async (done) => {
        const data = await getRepos('https://api.github.com/users/tryber/repos')
       expect(data.some((element) => element === 'sd-01-week4-5-project-meme-generator')).toBeFalsy()
       done()
    })
})