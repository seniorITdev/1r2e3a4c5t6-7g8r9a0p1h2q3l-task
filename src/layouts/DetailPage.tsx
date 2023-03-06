import { MouseEvent } from 'react';
import { useQuery } from '@apollo/client';
import { useSelector, useDispatch } from 'react-redux';
import { setDetail, setIsOpen } from '../_store/_reducer/detailSlice';
import { GET_DETAIL } from '../_apollo/gql/detailGql';
import { RootState } from '../_store/store';
import { DetailType } from '../_model/detailType';
import FadeIn from 'react-fade-in';
import LoadingDetailPage from '../components/LoadingDetailPage';

const DetailPage = () => {
    const id = useSelector<RootState, string>((state: RootState) => state.detail.showId);
    const detail = useSelector<RootState, DetailType>((state: RootState) => state.detail.detail);
    const dispatch = useDispatch();

    const { loading, error, data } = useQuery(
        GET_DETAIL,
        {
            variables: { id: id },
            onCompleted: (data) => {
                const { __typeName, ...detailData } = data.node;
                dispatch(setDetail(detailData as DetailType));
                console.log(detailData);
            }
        }
    )

    const closeDetailPage = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        dispatch(setIsOpen(false));
    }

    return (
        <>
            <div onClick={closeDetailPage} className="detail"></div>
            <div className="detail-content">
                <div className="detail-data">
                    {loading && <LoadingDetailPage />}
                    {!loading && <FadeIn delay={200}>
                        {detail.backdrop && <div className="detail-image"><img src={detail.backdrop} /></div>}
                        <div className="title"><span>Title: </span>{detail.title}</div>
                        <div className="runtime"><span>Run Time: </span>{detail.runtime} min</div>
                        <div className="overview"><span>Description: </span>{detail.overview}</div>
                        <div className="detail-content-button">
                            <button onClick={closeDetailPage}>Close</button>
                        </div>
                    </FadeIn>}
                </div>
            </div>

        </>
    );
}

export default DetailPage