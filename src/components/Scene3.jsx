const Scene3 = ({ color, label }) => {
    return (
        <div
            className={`w-screen h-screen flex items-center justify-center ${color}`}
        >
            <div className="text-center">
                <h1 className="text-4xl font-bold">{label}</h1>
                <p>scroll to roll the wheel of time!</p>
            </div>
        </div>
    )
}

export default Scene3;