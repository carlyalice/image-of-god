module.exports = {
    options: {
        transform: [
            [
                'babelify',
                {
                    "presets": [
                        [
                            "@babel/preset-env", {
                                "targets": {
                                    "node": "current"
                                }
                            }
                        ]
                    ]
                }
            ]
        ],
        browserifyOptions: {
            debug: true
        }
    },
    script: {
        src: ["../scripts/*.js"],
        dest: "../../public/bundle.js"
    }
    // style: {
    //     src: ["../styles/*.css"],
    //     dest: "../../public/bundle.css"
    //
}
