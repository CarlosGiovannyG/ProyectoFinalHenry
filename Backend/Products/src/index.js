if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}


const { app } = require("./server");


require("./config/database");


app.listen(app.get('port'), () => {
    console.log(`🚀 listening on port , http://localhost:${app.get('port')}`);
});
