import assert from 'assert'

describe("sample test suite", () => {
    describe("nested sub suite", () => {
        it("should do it right", () => {
            assert.equal('a', 'a')
        })
    })
})