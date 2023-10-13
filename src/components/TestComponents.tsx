import React, {useEffect} from "react";

export const TestComponent = () => {
    useEffect(() => {
        alert('Всем привет!')
    }, [])

    return (
        <React.Fragment>
            <div>
                Тестовый компонент!
            </div>
        </React.Fragment>
    )
}