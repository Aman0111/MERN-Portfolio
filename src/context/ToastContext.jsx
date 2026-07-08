import { createContext, useCallback, useContext, useRef, useState } from "react";

const ToastContext = createContext(() => {});

export function ToastProvider({ children }) {
  const [toast, setToast] = useState({ message: "", visible: false, error: false });
  const timeoutRef = useRef(null);

  const showToast = useCallback((message, { error = false } = {}) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setToast({ message, visible: true, error });
    timeoutRef.current = setTimeout(() => {
      setToast((t) => ({ ...t, visible: false }));
    }, 3200);
  }, []);

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <div id="toast" className={`${toast.visible ? "show" : ""} ${toast.error ? "error" : ""}`}>
        {toast.message}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
