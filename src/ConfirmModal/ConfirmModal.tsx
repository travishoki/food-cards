import "./ConfirmModal.scss";

type ConfirmModalProps = {
	message: string;
	onCancel: () => void;
	onConfirm: () => void;
	title: string;
};

export const ConfirmModal = ({
	message,
	onCancel,
	onConfirm,
	title,
}: ConfirmModalProps) => (
	<div className="confirm-modal-overlay" onClick={onCancel}>
		<div className="confirm-modal" onClick={(e) => e.stopPropagation()}>
			<h2 className="confirm-modal__title">{title}</h2>
			<p className="confirm-modal__message">{message}</p>
			<div className="confirm-modal__actions">
				<button
					className="confirm-modal__btn confirm-modal__btn--cancel"
					onClick={onCancel}
					type="button"
				>
					Cancel
				</button>
				<button
					className="confirm-modal__btn confirm-modal__btn--confirm"
					onClick={onConfirm}
					type="button"
				>
					Confirm
				</button>
			</div>
		</div>
	</div>
);
