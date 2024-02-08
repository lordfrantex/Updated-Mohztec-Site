"use client"

const { useEffect } = require("react")

const BootstrapClient = () => {
    useEffect(() => {
        require("../../../node_modules/bootstrap/dist/js/bootstrap.bundle")
    }, []);
    return null
}

export default BootstrapClient