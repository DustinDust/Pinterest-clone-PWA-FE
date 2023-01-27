import React, { useState, useEffect } from "react"
import Header from "components/Header"
import "./styles.scss"
import { useViewport } from "hooks"
import BoardCard from "components/BoardCard"
import Modal from "components/Modal"
import { useDispatch, useSelector } from "react-redux"
import { State } from "redux-saga/reducers"
import {
  followUser,
  getBoards,
  getFollowers,
  getFollowersUser,
  getFollowings,
  getFollowingsUser,
  getProfile,
  unFollowUser
} from "./actions"
import { useParams } from "react-router-dom"
import Follow from "components/Follow"

export interface ProfileInterface {
  id: number
  username: string
  displayName: string
  avatarUrl: string
  createdAt: string
  updatedAt: string
}

export interface BoardResponse {
  id: number
  name: string
  description: string
  visibility: number
  createdAt: string
  updateAt: string
  thumbnail: string | null
}

export interface BoardsResponse {
  data: BoardResponse[]
  pageIndex: number
  pageSize: number
  total: number
}

export interface BoardsRequest {
  userId: number
}

const Profile = () => {
  const { userId } = useParams()
  const dispatch = useDispatch()

  const [isFollowing, setIsFollowing] = useState(false)
  const [followNum, setFollowNum] = useState(0)

  const getProfileResult = useSelector((state: State) => state.getProfileResult)
  const profile = getProfileResult?.response as unknown as ProfileInterface

  const getBoardsResult = useSelector((state: State) => state.getBoardsResult)
  const boards = getBoardsResult?.response as unknown as BoardsResponse

  const getFollowersResult = useSelector(
    (state: State) => state.getFollowersResult
  )
  const followers = getFollowersResult?.response

  const getFollowingsResult = useSelector(
    (state: State) => state.getFollowingsResult
  )
  const followings = getFollowingsResult?.response

  const followUserResult = useSelector((state: State) => state.followUserResult)
  const followUserRes = followUserResult?.response

  const unFollowUserResult = useSelector(
    (state: State) => state.unFollowUserResult
  )
  const unFollowUserRes = unFollowUserResult?.response

  const getFollowersUserResult = useSelector(
    (state: State) => state.getFollowersUserResult
  )
  const followersUser = getFollowersUserResult?.response

  const getFollowingsUserResult = useSelector(
    (state: State) => state.getFollowingsUserResult
  )
  const followingsUser = getFollowingsUserResult?.response

  useEffect(() => {
    dispatch(getProfile({ userId: userId }))
    dispatch(getFollowers({ userId: userId }))
    dispatch(getFollowings({ userId: userId }))
    dispatch(getFollowersUser({ userId: undefined }))
    dispatch(getFollowingsUser({ userId: undefined }))
  }, [userId])

  useEffect(() => {
    if (profile) dispatch(getBoards({ userId: profile.id } as BoardsRequest))
  }, [profile])

  useEffect(() => {
    if (followers) {
      setFollowNum(followers!.count as number)
    }
  }, [followers])

  useEffect(() => {
    if (followingsUser && followingsUser.following) {
      setIsFollowing(
        (followingsUser.following as Array<any>).some(
          (user) => user.id === Number(userId)
        )
      )
    }
  }, [followingsUser])

  useEffect(() => {
    if (unFollowUserRes || followUserRes) {
      dispatch(getFollowers({ userId: userId }))
      dispatch(getFollowingsUser({ userId: undefined }))
    }
  }, [unFollowUserRes, followUserRes])

  const [active, setActive] = useState(1);
  const [open, setOpen] = useState(false)
  const [openSetting, setOpenSetting] = useState(false)
  const [openFollowing, setOpenFollowing] = useState(false)
  const [openFollower, setOpenFollower] = useState(false)

  const handleFollow = () => {
    dispatch(followUser({ id: userId }))
  }

  const handleUnFollow = () => {
    dispatch(unFollowUser({ id: userId }))
  }

  const viewPort = useViewport()
  const itemWidth =
    viewPort.width <= 900 ? viewPort.width / 2 : viewPort.width / 3

  return (
    <div className="profile">
      <Header setIsOpen={setOpen} setOpenSetting={setOpenSetting} />
      {open && <Modal setIsOpen={setOpen} inProfile />}
      {openSetting && <Modal setIsOpen={setOpenSetting} inProfile setting />}
      {openFollowing && (
        <Follow
          setIsOpen={setOpenFollowing}
          following
          follow={followings!.following as unknown as any[]}
        />
      )}
      {openFollower && (
        <Follow
          setIsOpen={setOpenFollower}
          follow={followers!.followers as unknown as any[]}
        />
      )}
      {profile && (
        <>
          <img
            src={profile.avatarUrl}
            className="avatar"
            alt={profile.username}
          ></img>
          <div className="user-name">{profile.displayName}</div>
          <div className="email">{profile.username}</div>
        </>
      )}
      <div className="follow">
        <div
          onClick={() => {
            if (followNum) setOpenFollower(true)
          }}
        >
          {" "}
          {followNum} người theo dõi .{" "}
        </div>
        {followings && (
          <div
            onClick={() => {
              if (followings.count) setOpenFollowing(true)
            }}
          >
            {" "}
            {followings.count as string} người đang theo dõi
          </div>
        )}
      </div>
      {userId &&
        userId !== localStorage.getItem("id") &&
        (isFollowing ? (
          <button className="un-follow-btn" onClick={handleUnFollow}>
            Bỏ theo dõi
          </button>
        ) : (
          <button className="follow-btn" onClick={handleFollow}>
            Theo dõi
          </button>
        ))}
      <div className="boards">
        <div
          className={`board ${active === 0 ? "active" : ""}`}
          onClick={() => setActive(0)}
        >
          Đã tạo
        </div>
        <div
          className={`board ${active === 1 ? "active" : ""}`}
          onClick={() => setActive(1)}
        >
          Đã lưu
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {boards &&
          boards.data &&
          boards.data.map((board) => (
            <BoardCard
              style={{ width: itemWidth }}
              key={board.id}
              props={board}
            />
          ))}
      </div>
    </div>
  )
}

export default Profile
