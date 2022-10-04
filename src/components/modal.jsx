import React,{useRef} from 'react'
import styles from "./modal.module.scss"

function Modal({children,title,root}) {
    const ref=useRef(null)
    function callback(e){
        root.unmount();
        document.querySelector("#modal").remove()
        ref.current.removeEventListener("animationend",callback)
    }
    function handleClick(){
        ref.current.classList.add(styles.fadeOut)
        ref.current.addEventListener("animationend", callback
        ,{once:true})
    }
  return (
    <div ref={ref} className={styles.modalContainer}>
      <div className={styles.modalView}>
        <div className={styles.modalHeader}>
            <div>{title}</div>
            <div className={styles.closeButton}>
                <button onClick={handleClick}>X</button>
            </div>
        </div>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  )
}

export default Modal
