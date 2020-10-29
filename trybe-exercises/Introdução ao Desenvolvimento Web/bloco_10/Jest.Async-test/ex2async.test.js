const { users, findUserById, getUserName} = require('../Jest.Async/ex2async')

it('User exists', () => {
   return expect(getUserName(4)).resolves.toEqual('Mark')
})

it("User doesn't exists", () => {
    return expect(getUserName(6)).rejects.toEqual(
        { error: 'User with ' + '6' + ' not found.' })
 })

it('User exists await', async (done) => {
    const user = await getUserName(4)
    expect.assertions(1)
    expect(user).toBe('Mark')
    done()
})

it("User doesn't exists", async () => {
    try {
        await getUserName('Fofo')
    }
    catch (error) {
        expect(error).toEqual({ error: 'User with ' + 'Fofo' + ' not found.' })
    }
 })