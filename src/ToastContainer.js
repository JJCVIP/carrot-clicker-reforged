/** Toast notifications */
export default function ToastContainer({ toasts, setToasts, closeToast }) {
    return (
        <div id="toast_container">
            {/* Toasts */}
            {Object.entries(toasts).map(([id, t]) => {
                return (
                    <div key={id} id="toast0" class={`toast background_${t.color??''}`}>
                        {/* Title / X button */}
                        <h3>(Toast #{Number(id)+1}) {t.title}</h3>
                        {
                            t.hide_close ? null :
                            <span class="toast_close" role="button" tabIndex="0" onClick={() => closeToast(id)}>
                                X
                            </span>
                        }
                        {/* Description */}
                        <p>{t.desc}</p>

                        {/* Button */}
                        {t.buttons ? t.buttons.map(btn => {
                            return <button onClick={
                                (() => {
                                    if(btn.closes) closeToast(id); // Close
                                    btn?.action?.(); // Run button action
                                })
                            }>
                                {btn.name}
                            </button>
                        }) : null}

                        {/* Disable tutorials */}
                        {
                            t.tutorial ?
                            <p class="secondary_text link_styling center" role="button" tabIndex="0">
                                Disable tutorial messages
                            </p> : null
                        }
                    </div>
                )
            })}

            {/* Clear all */}
            {Object.keys(toasts).length > 2 ?
                <div id="toasts_clear" onclick="clearToasts()">Close All</div> : null
            }
        </div>
    );
}