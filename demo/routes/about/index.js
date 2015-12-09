/**
 * Created by flybear on 15/11/18.
 */
module.exports = {
    path: 'about',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/About'))
        })
    }
}