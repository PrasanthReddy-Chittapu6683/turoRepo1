import * as React from "react";


export interface WebButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */

  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  text: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
export function WebButton({ text, onClick }: WebButtonProps) {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        style={{ backgroundColor: "teal", height: "70px", width: "170px", borderRadius: "10px", color: "whitesmoke", borderColor: "lightslategray" }}
      >
        {text}
      </button>
    </>
  );
}

