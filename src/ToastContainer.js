export default function ToastContainer({ toasts, setToasts }) {
    function close(id) {
        let modified = {...toasts};
        delete modified[id];
        setToasts(modified);
    }

    return (
        <div id="toast_container">
            {/* Toasts */}
            {Object.entries(toasts).map(([id, data]) => {
                return (
                    <div key={id} id="toast0" class="toast background_">
                        <h3>(#{id}) {data.title}</h3>
                        <span class="toast_close" role="button" tabIndex="0" onClick={() => close(id)}>X</span>
                        <p>
                            {data.desc}
                        </p>
                        <p class="secondary_text link_styling center" role="button" tabIndex="0">
                            Disable tutorial messages
                        </p>
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