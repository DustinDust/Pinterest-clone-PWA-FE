import React, { useEffect, useState } from "react"
// import { Masonry } from "masonic";
// import { useViewport } from "hooks";
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { ReactComponent as Dot } from "assets/svg/dot.svg"
import { PinResult } from "components/Board"
import BoardCard from "components/BoardCard"
import Header from "components/Header"
import Modal from "components/Modal"
import { State } from "redux-saga/reducers"
import { useViewport } from "hooks"
import {
  addComment,
  deleteComment,
  getBoardsHasPin,
  getPin,
  updateComment
} from "./actions"
import "./styles.scss"

export interface PinRequest {
  pinId: number
}

export interface BoardHasPin {
  id: number
  name: string
  thumbnail: string
  user: {
    id: number
    username: string
    displayName: string
    avatarUrl: string
  }
}

const Comment = ({ comment }: { comment: any }) => {
  const [open, setOpen] = useState(false)
  const [update, setUpdate] = useState(false)
  const [content, setContent] = useState(comment.content)
  const dispatch = useDispatch()

  const handleUpdateComment = () => {
    dispatch(updateComment({ commentId: comment.id, content: content }))
    setUpdate(false)
  }

  return (
    <div className="comment">
      <img
        src="https://i.pinimg.com/75x75_RS/02/22/bd/0222bd8273232e319e2fc1dd2c1c944d.jpg"
        alt="asd"
        className="comment-img"
      />
      <div>
        <div className="comment-top">
          <div className="comment-name">reidokun</div>
          {update ? (
            <>
              <input
                className="comment-content-clone"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <button
                className="comment-input-btn-cancel"
                onClick={() => setUpdate(false)}
              >
                Huỷ
              </button>
              <button
                className="comment-input-btn"
                onClick={handleUpdateComment}
              >
                Đã xong
              </button>
            </>
          ) : (
            <div className="comment-content">{comment.content}</div>
          )}
        </div>
        <div className="comment-bottom">
          <div className="comment-time">
            {formatDistanceToNow(new Date(comment.updatedAt).getTime())}
          </div>
          <div>
            <Dot className="comment-dot" onClick={() => setOpen((i) => !i)} />
            {open && (
              <>
                <div className="bg" onClick={() => setOpen(false)}></div>
                <div className="tooltip">
                  <div
                    className="tooltip-item"
                    onClick={() => {
                      setUpdate(true)
                      setOpen(false)
                    }}
                  >
                    Chỉnh sửa
                  </div>
                  <div
                    className="tooltip-item"
                    onClick={() =>
                      dispatch(deleteComment({ commentId: comment.id }))
                    }
                  >
                    Xoá
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const Pin = () => {
  const [save, setSave] = useState(false)
  const [comment, setComment] = useState("")
  const { pinId } = useParams()
  const dispatch = useDispatch()

  const getPinResult = useSelector((state: State) => state.getPinResult)
  const pin = getPinResult?.response as unknown as PinResult

  const getBoardsHasPinResult = useSelector(
    (state: State) => state.getBoardsHasPinResult
  )
  const boards = getBoardsHasPinResult?.response
    ?.data as unknown as BoardHasPin[]

  const addCommentResult = useSelector((state: State) => state.addCommentResult)
  const updateCommentResult = useSelector(
    (state: State) => state.updateCommentResult
  )
  const deleteCommentResult = useSelector(
    (state: State) => state.deleteCommentResult
  )

  useEffect(() => {
    if (pinId) {
      dispatch(getPin({ pinId: Number(pinId) } as PinRequest))
      dispatch(getBoardsHasPin({ pinId: Number(pinId) } as PinRequest))
    }
  }, [])

  useEffect(() => {
    if (addCommentResult || deleteCommentResult || updateCommentResult) {
      dispatch(getPin({ pinId: Number(pinId) } as PinRequest))
    }
  }, [addCommentResult, updateCommentResult, deleteCommentResult])

  const viewPort = useViewport()
  const itemWidth =
    viewPort.width <= 900 ? viewPort.width / 2 : viewPort.width / 3

  const handleComment = () => {
    dispatch(addComment({ content: comment, pinId: pinId }))
  }

  const handleCancelComment = () => {
    setComment("")
  }

  return (
    <div className="pin">
      <Header inPin setSave={setSave} />
      {save && (
        <Modal saveOpen pinId={pin.id} src={pin.url} setIsOpen={setSave} />
      )}
      {pin && <img src={pin.url} alt={pin.name} className="pin-image" />}
      <div className="img-attribute">
        <div className="img-name">{pin && pin.name}</div>
      </div>
      <div className="comments">
        {pin && (
          <>
            <div className="comments-header">
              {pin.comments ? pin.comments.length : 0} nhận xét
            </div>
            {pin.comments.map((comment: unknown) => {
              return <Comment comment={comment} />
            })}
          </>
        )}
        <div className="comment-inputs">
          <input
            className="comment-input"
            type="text"
            placeholder="Thêm nhận xét"
            onChange={(e) => setComment(e.target.value)}
          />
          {comment && (
            <>
              <button
                className="comment-input-btn-cancel"
                onClick={handleCancelComment}
              >
                Huỷ
              </button>
              <button className="comment-input-btn" onClick={handleComment}>
                Đã xong
              </button>
            </>
          )}
        </div>
      </div>
      <div className="img-note" style={{ marginBottom: "12px" }}>
        Các bảng lưu pin
      </div>
      <div style={{ display: "flex" }}>
        {boards &&
          boards.map((board, i) => (
            <BoardCard
              style={{ width: itemWidth }}
              key={board.id}
              boardInPin={board}
            />
          ))}
      </div>
    </div>
  )
}

export default Pin
