import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from "./SuperButton.module.css";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
    name?: string
    error?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        error, className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {

    const finalClassName = `${error ? s.red : s.default} `;


    return (
        <button
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    );
}

export default SuperButton;
