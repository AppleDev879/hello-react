import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onDismiss: () => void;
}

const Alert = ({ children, onDismiss }: Props) => {
  return (
    <div
      className="alert alert-primary alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onDismiss}
      />
    </div>
  );
};

export default Alert;
