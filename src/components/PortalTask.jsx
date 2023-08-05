import '../styles/PortalTask.css'

function PortalTask ({ showPortal, handlePortal, addTask, handleSubmit, inputTitleRef, inputContentRef }) {
    
    const add = () => {
        
        if(inputTitleRef.current.value) {
            addTask()
            handlePortal()
            inputTitleRef.current.value = ''
            inputContentRef.current.value = ''
        }
    }
    
    return (
        <div className={showPortal}>
            <div className='portal-content'>
                <h3>Add to new Task</h3>
                <form className='portal-form' onSubmit={handleSubmit}>
                    <textarea className='portal-form-textarea-1' ref={inputTitleRef} placeholder="title" ></textarea>
                    <textarea className='portal-form-textarea-2' ref={inputContentRef} placeholder="content" ></textarea>
                    <button onClick={add} type="submit">ADD</button>
                </form>
            </div>
        </div>
    )
}

export { PortalTask }